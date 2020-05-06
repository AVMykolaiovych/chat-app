<template>
  <div class="reset-page">
    <div class="reset-form-wrap">
      <div class="reset-form-image">
        <img src="../assets/login-page-bg.png" alt="">
      </div>
      <ForgotPasswordForm/>
    </div>
  </div>
</template>

<script>
import ForgotPasswordForm from '@/components/ForgotPasswordForm.vue';

export default {
  name: 'Reset',
  components: {
    ForgotPasswordForm,
  },
};
</script>

<style scoped>
.reset-page {
  background-color: #D5E4E4;
  height: 100vh;
  min-height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reset-form-wrap {
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
.reset-form-image {
  height: 100%;
  overflow: hidden;
}
.reset-form-image img {
  display: block;
  height: 100%;
  transform: scale(1.2);
}
</style>
