<template>
  <div class="login-page">
    <div class="login-form-wrap">
      <div class="login-form-image">
        <img src="../assets/login-page-bg.png" alt="">
      </div>
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login-page {
  background-color: #D5E4E4;
  height: 100vh;
  min-height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form-wrap {
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  border-radius:20px ;
  display: flex;
  align-items: center;
  box-shadow: 0 30px 90px #A7D7D9;
  height: 600px;
  overflow: hidden;
}
.login-form-image {
  height: 100%;
  overflow: hidden;
}
.login-form-image img {
  display: block;
  height: 100%;
  transform: scale(1.2);
}
</style>
