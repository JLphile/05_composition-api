import { customRef } from 'vue';
// 自定义ref
// delay 函数默认值
export default function (value, delay = 500) {
  let timer = null;
  // customRef 要求输入 函数体
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        // 防抖
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
