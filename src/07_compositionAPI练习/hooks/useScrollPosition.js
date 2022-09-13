import { ref } from 'vue';
export default function () {
  const scrollX = ref(0);
  const scrollY = ref(0);
  document.addEventListener('scroll', () => {
    scrollX.value = Math.round(window.scrollX);
    scrollY.value = Math.round(window.scrollY);
  });
  return {
    scrollX,
    scrollY,
  };
}
