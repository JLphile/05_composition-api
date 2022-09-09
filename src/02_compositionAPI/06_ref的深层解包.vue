<template>
  <div>
    <h2>Home component</h2>
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象时，会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>
    <!-- 深层解包 -->
    <h2>当前计数：{{ info.counter }}</h2>
    <!-- reactive函数处理的 将会变成响应式的数据 -->
    <h2>当前计数：{{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    let counter = ref(100);

    const info = {
      counter,
    };
    const reactiveInfo = reactive({
      counter,
    });
    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
      console.log(info.counter.value);
      console.log(reactiveInfo.counter);
    };
    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped></style>
