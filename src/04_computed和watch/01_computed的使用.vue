<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const firstName = ref('Peter');
    const lastName = ref('Tom');
    // 用法一： 默认传入一个getter函数,computed返回的是一个ref对象
    // const fullName = computed(() => firstName.value + ' ' + lastName.value);
    // 用法二：传入一个对象，包含get和set
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ');
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeName = () => {
      // firstName.value = 'Lily';
      fullName.value = 'coder why';
    };
    return {
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped></style>
