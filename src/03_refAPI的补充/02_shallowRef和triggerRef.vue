<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">change info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from 'vue';
export default {
  setup() {
    // shallowRef 只有浅层才能响应
    const info = shallowRef({
      name: 'why',
    });
    const changeInfo = () => {
      info.value.name = 'peter';
      //   triggerRef手动触发响应
      //   triggerRef(info);
    };
    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
