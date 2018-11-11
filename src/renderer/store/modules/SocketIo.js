import logger from 'electron-timber';

const SOCKET_CONNECT = 'SOCKET_CONNECT';
const SOCKET_TWEET = 'SOCKET_TWEET';

const state = {
  connect: false,
  message: null,
};

const mutations = {
  [SOCKET_CONNECT](state) {
    state.connect = true;
  },
  [SOCKET_TWEET](state, message) {
    const result = message.join(', ');
    logger.log(SOCKET_TWEET, result);
    state.message = result;
  },
};

const getters = {
  getMessage(state) {
    return state.message;
  },
};

export default {
  state,
  mutations,
  getters,
};
