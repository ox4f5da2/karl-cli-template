import { createApp } from 'vue';
import Antd from 'ant-design-vue'; // 使用Ant-Design组件库
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css'; // 导入css样式文件

const app = createApp(App);
app.use(store).use(router).use(Antd).mount('#app');