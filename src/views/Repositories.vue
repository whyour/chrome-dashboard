<template>
  <div v-if="result && result.length > 0" class="explore-wrapper">
    <ul>
      <li v-for="(v, i) in result" :key="i" class="Box-row">
        <div class="float-right">
          <div
            class="js-toggler-container js-social-container starring-container"
          >
            <button
              class="btn btn-sm js-toggler-target"
              title="Unstar quantopian/zipline"
            >
              <svg
                class="octicon octicon-star v-align-text-bottom"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                />
              </svg>
              Star
            </button>
          </div>
        </div>
        <h1 class="h3 lh-condensed">
          <a :href="v.url" class="ghh-repo-x tooltipstered">
            <span class="mr-1 text-gray">
              <svg
                aria-label="repo"
                height="16"
                class="octicon octicon-repo"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                />
              </svg>
            </span>
            <span class="text-normal">{{ v.author }} /</span>
            {{ v.name }}
          </a>
        </h1>
        <p class="col-9 text-gray my-1 pr-4">{{ v.description }}</p>
        <div class="f6 text-gray mt-2">
          <span v-if="v.language" class="d-inline-block ml-0 mr-3">
            <span
              class="repo-language-color"
              :style="{ 'background-color': v.languageColor }"
            ></span>
            <span itemprop="programmingLanguage">{{ v.language }}</span>
          </span>
          <a class="muted-link d-inline-block mr-3" :href="v.url">
            <span aria-label="star">
              <svg
                aria-label="star"
                height="16"
                class="octicon octicon-star"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                />
              </svg>
            </span>
            {{ v.stars }}
          </a>
          <a class="muted-link d-inline-block mr-3" :href="v.url">
            <span aria-label="fork">
              <svg
                aria-label="repo-forked"
                height="16"
                class="octicon octicon-repo-forked"
                viewBox="0 0 10 16"
                version="1.1"
                width="10"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                />
              </svg>
            </span>
            {{ v.forks }}
          </a>
          <span
            class="d-inline-block mr-3"
          >
            Built by
            <a
              v-for="(user, index) in v.builtBy"
              :key="index"
              class="d-inline-block mr-1"
              data-hovercard-type="user"
              :href="user.href"
            >
              <el-image
                class="avatar mb-1 ghh-user-x tooltipstered"
                :src="user.avatar"
                style="width: 20px;height: 20px"
                :alt="user.username"
                lazy
              ></el-image>
            </a>
          </span>
          <span class="d-inline-block float-sm-right">
            <span>
              <svg
                aria-label="star"
                height="16"
                class="octicon octicon-star"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                />
              </svg>
            </span>
            {{ v.currentPeriodStars }} stars today
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  private result: any[] = [];

  async created() {
    this.result = (await (this as any).axios.get("/repositories")).data;
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
