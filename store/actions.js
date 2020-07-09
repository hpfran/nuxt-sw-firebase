export default {
  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { ...authUser } = res.locals.user;
  
      await dispatch('onAuthStateChanged', {
        authUser
      });
    }
  },
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      await commit('RESET_STORE');
      return;
    }
  
    commit('SET_AUTH_USER', { authUser });
  }
};
