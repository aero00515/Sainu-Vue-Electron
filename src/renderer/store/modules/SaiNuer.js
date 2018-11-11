const SET_SAINUER = 'SET_SAINUER';

const state = {
  sainuer: '',
};

const mutations = {
  [SET_SAINUER](state, sainuer) {
    state.sainuer = sainuer;
  },
};

const actions = {
  setSaiNuer({ commit }, sainuer) {
    commit(SET_SAINUER, sainuer);
  },
};

const getters = {
  getSaiNuer(state) {
    return state.sainuer;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
