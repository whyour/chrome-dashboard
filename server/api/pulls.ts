import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { GITHUB_URL } from '../../core/config'
import { omitNil, removeDefaultAvatarSize } from '../../core/util'

export async function fetchPR({ language = '', since = 'daily' } = {}): Promise<
  any
> {
  const data = await fetch(
    `${GITHUB_URL}/trending/developers/${language}?since=${since}`
  )
  const $ = (cheerio as any).load(await data.text())
  return $('.Box article.Box-row')
    .get()
    .map((dev): any => {
      const $dev = $(dev)
      const relativeUrl = $dev.find('.h3 a').attr('href')
      const name = $dev
        .find('.h3 a')
        .text()
        .trim()

      const username = relativeUrl.slice(1)

      const type = $dev
        .find('img')
        .parent()
        .attr('data-hovercard-type')

      const $repo = $dev.find('.mt-2 > article')

      $repo.find('svg').remove()

      return omitNil({
        username,
        name,
        type,
        url: `${GITHUB_URL}${relativeUrl}`,
        avatar: removeDefaultAvatarSize($dev.find('img').attr('src')),
        repo: {
          name: $repo
            .find('a')
            .text()
            .trim(),
          description:
            $repo
              .find('.f6.mt-1')
              .text()
              .trim() || /* istanbul ignore next */ '',
          url: `${GITHUB_URL}${$repo.find('a').attr('href')}`
        }
      })
    })
}
