<template>
  <div>
    <h2>{{ readonlyInfo1.name }}</h2>
    <h2>{{ readonlyInfo2.name }}</h2>
    <h2>{{ readonlyInfo3 }}</h2>
    <button @click="updateState">修改名字</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue';
export default {
  setup() {
    // 1.普通对象
    const info1 = {
      name: 'why',
    };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式对象reactive仍然不能修改
    const info2 = reactive({
      name: 'why',
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式对象ref
    const info3 = ref('why');
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      readonlyInfo1.name = 'peter';
      readonlyInfo2.name = 'peter';
      readonlyInfo3.value = 'peter';
    };
    return {
      updateState,
      readonlyInfo1,
      readonlyInfo2,
      readonlyInfo3,
    };
  },
};
</script>

<style scoped></style>
