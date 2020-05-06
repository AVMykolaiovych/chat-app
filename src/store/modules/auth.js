import mutations from '@/store/mutations';
import {
  firebaseLogin, firebaseLogout, firebaseSignUp, firebaseResetPassword,
} from '@/services/firebase/auth.service';

const {
  IS_LOGGED_IN,
  LOGIN_LOADER,
  IS_CREATED,
  CREATING_LOADER,
  SENDING_LOADER,
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
    isCreated: false,
    creatingProgress: false,
    isChanged: false,
    sendingProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    isCreated: ({ isCreated }) => isCreated,
    creatingProgress: ({ creatingProgress }) => creatingProgress,
    sendingProgress: ({ sendingProgress }) => sendingProgress,
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
    [IS_CREATED](state, bool) {
      state.isCreated = bool;
    },
    [CREATING_LOADER](state, bool) {
      state.creatingProgress = bool;
    },
    [SENDING_LOADER](state, bool) {
      state.sendingProgress = bool;
    },
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, bool) {
        commit(IS_LOGGED_IN, bool);
      },
      root: true,
    },
    setIsCreatedState: {
      handler({ commit }, bool) {
        commit(IS_CREATED, bool);
      },
      root: true,
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
      } catch (err) {
        dispatch(
          'loadMessage',
          { type: 'error', message: err.message },
          { root: true },
        );
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
    async signUp({ commit, dispatch }, { email, password }) {
      try {
        commit(CREATING_LOADER, true);
        await firebaseSignUp(email, password);
      } catch (err) {
        dispatch(
          'loadMessage',
          { type: 'error', message: err.message },
          { root: true },
        );
      } finally {
        commit(CREATING_LOADER, false);
      }
    },
    async resetPassword({ commit, dispatch }, { email }) {
      try {
        commit(SENDING_LOADER, true);
        await firebaseResetPassword(email);
        dispatch(
          'loadMessage',
          { type: 'info', message: 'Password reset instructions were sent to your email address.' },
          { root: true },
        );
      } catch (err) {
        dispatch(
          'loadMessage',
          { type: 'error', message: err.message },
          { root: true },
        );
      } finally {
        commit(SENDING_LOADER, false);
      }
    },
    async logout() {
      try {
        await firebaseLogout();
      } catch (error) {
        console.error(error);
      }
    },
  },
};

export default authStore;
