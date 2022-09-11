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
    const changeName = () => (name.value = 'peter');
    const changeAge = () => age.value++;
    watchEffect(() => {
      console.log('name:', name.value, 'age:', age.value);
    });
    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
