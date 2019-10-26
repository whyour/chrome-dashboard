import { fetchRepositories, fetchDevelopers } from './api/trending'
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const config = require('../nuxt.config')

config.dev = app.env !== 'production'

async function start() {
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  router.get('/api/repositories', async (ctx: any) => {
    const result = await fetchRepositories()
    ctx.body = { code: 200, data: result }
  })

  router.get('/api/developers', async (ctx: any) => {
    const result = await fetchDevelopers()
    ctx.body = { code: 200, data: result }
  })

  app.use(router.routes()).use(router.allowedMethods())

  app.use((ctx: any) => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
