<template>
  <div class="home">
    <div>Home</div>
    <ElButton type="danger" @click="onClick">Logout</ElButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('auth', ['logout']),
    async onClick() {
      await this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
