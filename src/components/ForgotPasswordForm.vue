<template>
  <div class="forgot-form">
    <h1>Reset Password</h1>
    <p class="forgot-description">By sending a request to change the password and receiving a
      notification of its successful sending, go to your e-mail and follow the instructions.</p>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="forgotPasswordForm"
    >
      <ElFormItem
        label="Email"
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email"/>
      </ElFormItem>
      <ElFormItem/>

      <div class="form-action">
        <ElButton
          type="success"
          plain
          size="small"
          native-type="submit"
          :loading="sendingProgress"
        >
          Reset password
        </ElButton>
      </div>

    </ElForm>

    <span class="forgot-footer">Do you want to return to the login page and use the new password?
      <router-link :to="{ name: 'Login'}">
        <ElLink type="primary" :underline="false">Log In</ElLink>
      </router-link>
    </span>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ForgotPasswordForm',
  data: () => ({
    formData: {
      email: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input corret email address',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('auth', ['sendingProgress']),
  },
  methods: {
    ...mapActions('auth', ['resetPassword']),
    onSubmit() {
      this.$refs.forgotPasswordForm.validate((isValid) => {
        if (!isValid) return;
        this.resetPassword({ ...this.formData });
        this.$refs.forgotPasswordForm.resetFields();
      });
    },
  },
};
</script>

<style scoped>
.forgot-form {
  padding: 20px 80px;
  width: 350px;
}
.form-action {
  margin-bottom: 30px;
}
.forgot-description,
.forgot-footer {
  color: rgba(0, 0, 0, .5);
  font-size: 14px;
}
</style>
