import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url) {
  const { app } = createApp();

  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
