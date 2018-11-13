const SOCKET_CONNECT = 'SOCKET_CONNECT';
const SOCKET_AWARE = 'SOCKET_AWARE';
const SOCKET_SET_SENUER = 'SOCKET_SETSENUER';

const state = {
  connect: false,
  message: null,
  senuer: '',
};

const mutations = {
  [SOCKET_CONNECT](state) {
    state.connect = true;
  },
  [SOCKET_AWARE](state, message) {
    const result = message.join(', ');
    state.message = result;
  },
  [SOCKET_SET_SENUER](state, senuer) {
    const result = senuer.join(', ');
    state.senuer = result;
  },
};

const getters = {
  getMessage(state) {
    return state.message;
  },
  getSenuer(state) {
    return state.senuer;
  },
};

export default {
  state,
  mutations,
  getters,
};
