<template>
  <div>
    <input v-model="message" />
    <h2>{{ message }}</h2>
    <!-- <button @click="changeInfo">change info</button> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import useDebounceRef from './hook/useDebounceRef';
export default {
  setup() {
    const message = useDebounceRef('Hello World');
    return {
      message,
    };
  },
};
</script>

<style scoped></style>
