<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notifier',
  computed: {
    ...mapGetters(['lastMessage']),
  },
  watch: {
    lastMessage: 'showMessage',
  },
  methods: {
    showMessage(value) {
      this.$message({ ...value });
    },
  },
};
</script>

<style scoped>

</style>
