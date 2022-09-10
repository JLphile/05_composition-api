<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeFirstName">change first name</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const firstName = ref('Peter');
    const lastName = ref('Tom');
    // 用法一： 默认传入一个getter函数
    const fullName = computed(() => firstName.value + ' ' + lastName.value);

    const changeFirstName = () => {
      firstName.value = 'Lily';
    };
    return {
      fullName,
      changeFirstName,
    };
  },
};
</script>

<style scoped></style>
