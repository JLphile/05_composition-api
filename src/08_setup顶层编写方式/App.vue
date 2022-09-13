<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <home message="我是传入的信息" @increment="getCounter"></home>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Home from './Home.vue';

const counter = ref(0);
const increment = () => counter.value++;

const getCounter = (payload) => {
  console.log(payload);
};
</script>

<style scoped></style>
