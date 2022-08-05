import App from './App.vue';
import { createSSRApp } from 'vue';
import { createRouter } from './router';

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}
