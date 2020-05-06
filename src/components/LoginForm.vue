<template>
  <div class="login-form">
    <h1 class="login-form-title">Welcome</h1>
    <p class="login-form-description">Welcome to the live chat! Please login to join.</p>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="loginForm"
    >
      <ElFormItem
        label="Email"
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email"/>
      </ElFormItem>
      <ElFormItem
        label="Password"
        prop="password"
        size="small"
      >
        <ElInput
          v-model="formData.password"
          type="password"
          :show-password="true"
        />
      </ElFormItem>

      <router-link :to="{ name: 'Reset'}">
        <ElLink type="info">Forgot password? Reset password.</ElLink>
      </router-link>

      <div class="form-action">
        <ElButton
          type="success"
          plain
          size="small"
          native-type="submit"
          :loading="loginInProgress"
        >
          Login
        </ElButton>
      </div>

      <router-link :to="{ name: 'SignUp'}">
        <ElLink type="primary">Don`t have account? Sign up.</ElLink>
      </router-link>

    </ElForm>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please enter email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please enter corret email address',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please enter password',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('auth', ['loginInProgress']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      this.$refs.loginForm.validate((isValid) => {
        if (!isValid) return;
        this.login({ ...this.formData });
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  padding: 20px 80px;
  width: 350px;
}
.login-form-description {
  margin-bottom: 30px;
  color: rgba(0, 0, 0, .5);
  font-size: 14px;
}
.form-action {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
