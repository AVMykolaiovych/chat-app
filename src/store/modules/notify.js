import mutations from '@/store/mutations';

const {
  SHOW_NOTIFY,
} = mutations;

const notifyStore = {
  state: {
    messagePool: [],
  },
  getters: {
    lastMessage: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [SHOW_NOTIFY](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    loadMessage({ commit }, payload = {}) {
      commit(SHOW_NOTIFY, payload);
    },
  },
};

export default notifyStore;
