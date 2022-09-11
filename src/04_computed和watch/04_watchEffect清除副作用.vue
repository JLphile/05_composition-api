<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    const name = ref('why');
    const age = ref(18);

    // watchEffect返回的是stop函数
    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log('网络请求成功');
      }, 2000);
      // 根据name和age发送网络请求
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel()
        clearTimeout(timer);
        console.log('onInvalidate');
      });
      console.log('name:', name.value, 'age:', age.value);
    });

    const changeName = () => (name.value = 'peter');
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
      stop,
    };
  },
};
</script>

<style scoped></style>
