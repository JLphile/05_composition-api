<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="bar">Home按钮</button>
  </div>
</template>

<script>
import BasePage from './BasePage.vue';
export default {
  extends: BasePage,
  data() {
    return {
      content: 'Home page content',
    };
  },
};
</script>

<style scoped></style>
