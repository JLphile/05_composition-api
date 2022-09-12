<template>
  <div>
    <home></home>
    <h2>App-counter:{{ counter }}</h2>
    <button @click="increment">App+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from 'vue';
import Home from './Home.vue';
export default {
  components: { Home },
  setup() {
    const name = ref('coderwhy');
    let counter = ref(100);

    const increment = () => counter.value++;

    provide('name', readonly(name));
    provide('counter', readonly(counter));

    return {
      increment,
      counter,
    };
  },
};
</script>

<style scoped></style>
