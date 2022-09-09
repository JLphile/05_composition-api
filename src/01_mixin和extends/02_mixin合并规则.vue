<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixin';
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: 'App data',
      message: 'Hello App',
    };
  },
  methods: {
    foo() {
      console.log('App foo done');
    },
  },
  created() {
    console.log('App created');
  },
};
</script>

<style scoped></style>
