<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeData">change data</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup() {
    // 1.定义侦听源数据
    const info = reactive({
      name: 'reactive name',
      age: 18,
    });
    const name = ref('why');
    //2. watch侦听器
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeData = () => {
      info.name = 'info new name';
      name.value = 'Tom';
    };

    return {
      changeData,
      info,
      name,
    };
  },
};
</script>

<style scoped></style>
