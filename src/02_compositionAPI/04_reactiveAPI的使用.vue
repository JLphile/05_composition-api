<template>
  <div>
    <h2>Home component</h2>
    <h2>{{ message }}</h2>

    <h2>当前计数：{{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    // reactive函数要求传入的是对象或者数组
    const state = reactive({
      counter: 100,
    });
    const increment = () => {
      state.counter++;
      console.log(state.counter);
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped></style>
