import firebase from '@/plugins/firebase';

const auth = firebase.auth();

export const firebaseLogin = async (email, password) => {
  try {
    const data = await auth.signInWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseLogout = async () => {
  try {
    const data = await auth.signOut();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseSignUp = async (email, password) => {
  try {
    const data = await auth.createUserWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseResetPassword = async (email) => {
  try {
    const data = await auth.sendPasswordResetEmail(email);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
