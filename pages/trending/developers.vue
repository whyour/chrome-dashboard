<template>
  <div v-if="result && result.length > 0" class="explore-wrapper">
    <ul>
      <li v-for="(v, i) in result" :key="i" class="Box-row d-flex">
        <a
          class="text-gray f6 text-center"
          href="#pa-mrdoob"
          style="width: 16px;"
        >
          {{ i + 1 }}
        </a>
        <div class="mx-3">
          <a class="d-inline-block" :href="v.url">
            <img
              class="rounded-1 ghh-user-x tooltipstered"
              :src="v.avatar"
              width="48"
              height="48"
            />
          </a>
        </div>
        <div class="d-sm-flex flex-auto">
          <div class="col-sm-8 d-md-flex">
            <div class="col-md-6">
              <h1 class="h3 lh-condensed">
                <a :href="v.url">
                  {{ v.name }}
                </a>
              </h1>
              <p class="f4 text-normal mb-1">
                <a :href="v.url">
                  {{ v.username }}
                </a>
              </p>
            </div>
            <div class="col-md-6">
              <div class="mt-2 mb-3 my-md-0">
                <article>
                  <div class="f6 text-gray text-uppercase mb-1">
                    <svg
                      class="octicon octicon-flame text-orange-light mr-1"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
                      ></path>
                    </svg>
                    Popular repo
                  </div>
                  <h1 class="h4 lh-condensed">
                    <a
                      :href="v.repo.url"
                      class="css-truncate css-truncate-target ghh-repo-x tooltipstered"
                      style="max-width: 175px; box-shadow: transparent 0px 0px;"
                    >
                      <svg
                        class="octicon octicon-repo text-gray mr-1"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        ></path>
                      </svg>
                      {{ v.repo.name }}
                    </a>
                  </h1>
                  <div class="f6 text-gray mt-1">
                    {{ v.repo.description }}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },
  async asyncData({ params, $axios }) {
    let result
    try {
      result = (await $axios.$get('/api/developers')).data
    } catch (error) {
      console.log(error.message)
    }
    return { result }
  }
}
</script>

<style>
.explore-wrapper {
  max-width: 1012px;
  margin: 0 auto;
}
.repo-language-color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
