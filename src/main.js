import { createApp } from 'vue';
import App from './02_compositionAPI/App.vue';

const app = createApp(App);
// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log('全局的mixin中的created调用');
//   },
// });
app.mount('#app');
