import Vue, { ComponentOptions } from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'

export interface NuxtContext<V extends Vue> {
  app: V
  isClient: boolean
  isServer: boolean
  isStatic: boolean
  isDev: boolean
  isHMR: boolean
  route: Route
  store: Store<any>
  env: object
  params: object
  query: object
  $axios: any
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?(context: NuxtContext<V>): Promise<object> | object
    fetch?(context: NuxtContext<V>): Promise<object> | object
  }
}
