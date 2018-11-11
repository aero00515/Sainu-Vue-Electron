import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import logger from 'electron-timber';
import config from '../../../config';

const socketConfig = config.default.socket;

const socketHost = `//${socketConfig.host}${socketConfig.port ? `:${socketConfig.port}` : ''}`;
Vue.use(VueSocketio, socketHost);

export default {
  sockets: {
    connect() {
      logger.log('socket connected');
    },
    tweet(val) {
      logger.log('this method was fired by the socket server. eg: io.emit("tweet", data)', val);
    },
  },
};
