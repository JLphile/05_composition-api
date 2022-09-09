<template>
  <div>
    <h2>Home component</h2>
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计数：{{ counter }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  /**
   * 参数一：props,父组件传递过来的属性
   * setup函数有哪些参数
   * setup函数有什么样的返回值
   * context有3个属性 ，可以用结构写法
   */
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);

    return {
      title: 'This is the message of setup',
      counter: 100,
    };
  },
};
</script>

<style scoped></style>
