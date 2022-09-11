<template>
  <div>
    <h2>{{ info.name }}</h2>
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
      friend: {
        name: 'Lily',
      },
    });
    //2. watch侦听器
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log('newValue:', newValue, 'oldValue:', oldValue);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const changeData = () => {
      info.friend.name = 'friend new name';
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
