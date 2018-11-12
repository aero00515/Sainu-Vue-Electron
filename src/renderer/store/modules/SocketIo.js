const SOCKET_CONNECT = 'SOCKET_CONNECT';
const SOCKET_TWEET = 'SOCKET_TWEET';
const SOCKET_SET_SAINUER = 'SOCKET_SETSAINUER';

const state = {
  connect: false,
  message: null,
  sainuer: '',
};

const mutations = {
  [SOCKET_CONNECT](state) {
    state.connect = true;
  },
  [SOCKET_TWEET](state, message) {
    const result = message.join(', ');
    state.message = result;
  },
  [SOCKET_SET_SAINUER](state, sainuer) {
    const result = sainuer.join(', ');
    state.sainuer = result;
  },
};

const getters = {
  getMessage(state) {
    return state.message;
  },
  getSaiNuer(state) {
    return state.sainuer;
  },
};

export default {
  state,
  mutations,
  getters,
};
