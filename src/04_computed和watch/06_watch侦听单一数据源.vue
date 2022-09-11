<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeReactiveData">change reactive data</button>
    <button @click="changeRefData">change ref data</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup() {
    const info = reactive({
      name: 'reactive name',
      age: 18,
    });
    // 1.第一个参数传入一个get()函数
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log('newValue:', newValue, 'oldValue:', oldValue);
    //   }
    // );
    // 2.传入一个可响应对象：首选ref对象，
    // 情况一：如果是reactive对象 那么获取到的newValue和oldValue都是reactive对象
    watch(info, (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue);
    });
    // 如果想要reactive对象中的数据值，那么可以采用get()函数解构写法
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log('newValue:', newValue, 'oldValue:', oldValue);
      }
    );
    const changeReactiveData = () => {
      info.name = 'peter';
    };
    // 情况二：ref对象获取到的newValue和oldValue是value值本身
    const name = ref('why');
    watch(name, (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue);
    });

    const changeRefData = () => {
      name.value = 'Tom';
    };

    return {
      changeReactiveData,
      changeRefData,
      info,
      name,
    };
  },
};
</script>

<style scoped></style>
