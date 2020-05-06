import mutations from '@/store/mutations';

const { USER } = mutations;

const userStore = {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: ({ user }) => user,
  },
  mutations: {
    [USER](state, obg) {
      state.user = obg;
    },
  },
  actions: {
    setUserState: {
      handler({ commit }, user) {
        commit(USER, user);
      },
      root: true,
    },
  },
};

export default userStore;
