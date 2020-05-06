<template>
  <div class="sign_up-page">
    <div class="sign_up-form-wrap">
      <div class="sign_up-form-image">
        <img src="../assets/login-page-bg.png" alt="">
      </div>
      <SignUpForm/>
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm,
  },
};
</script>

<style scoped>
.sign_up-page {
  background-color: #D5E4E4;
  height: 100vh;
  min-height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign_up-form-wrap {
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
.sign_up-form-image {
  height: 100%;
  overflow: hidden;
}
.sign_up-form-image img {
  display: block;
  height: 100%;
  transform: scale(1.2);
}
</style>
