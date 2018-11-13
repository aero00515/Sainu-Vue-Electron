import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import VTooltip from 'v-tooltip';
import axios from 'axios';
import logger from 'electron-timber';

import App from './App';
import router from './router';
import store from './store';
import config from '../../config';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const socketConfig = config.default.socket;
const socketHost = `//${socketConfig.host}${socketConfig.port ? `:${socketConfig.port}` : ''}`;

Vue.use(VueSocketio, socketHost, store);
Vue.use(VTooltip);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  sockets: {
    connect() {
      logger.log('socket connected');
    },
  },
  template: '<App/>',
}).$mount('#app');
