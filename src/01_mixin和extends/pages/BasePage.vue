<template>
  <div>
    <h2>Base Page</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'This message is from base page ',
    };
  },
  methods: {
    bar() {
      console.log('执行了base page 的bar');
    },
  },
};
</script>

<style scoped></style>
