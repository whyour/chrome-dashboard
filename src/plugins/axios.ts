'use strict';

import Vue from 'vue';
import axios from 'axios';
import { Loading } from 'element-ui';
import { ElLoadingComponent } from 'element-ui/types/loading';

let config = {
  baseURL: 'https://github-api.whyour.now.sh/api'
};

let loading: ElLoadingComponent;

function startLoading() {
  loading = Loading.service({
    lock: true,
    spinner: 'my-el-custom-spinner',
    background: 'rgba(0, 0, 0, 0.7)'
  });
}
function endLoading() {
  loading.close();
}

let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    showFullScreenLoading();
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    tryHideFullScreenLoading();
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

(Plugin as any).install = function(Vue: any, options: any) {
  Vue.axios = _axios;
  (window as any).axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin as any);

export default Plugin;
