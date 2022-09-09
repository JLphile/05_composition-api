<template>
  <div>
    <h2>Home component</h2>
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象时，会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    let counter = ref(100);
    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
