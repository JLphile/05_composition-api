<template>
  <div>
    <h2 ref="title">Hello World</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    const title = ref(null);
    // watchEffect(()=>{},{})函数有 两个参数，第一个是回调函数，第二个是flush
    watchEffect(
      () => {
        console.log(title.value);
      },
      // 默认是直接执行，改为post后是元素挂载完成后才执行
      {
        flush: 'post',
      }
    );
    return {
      title,
    };
  },
};
</script>

<style scoped></style>
