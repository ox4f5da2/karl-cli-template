// 批量注册

import type { App } from 'vue';
const modules = import.meta.glob('./**/index.ts', { eager: true });
interface component {
  __file: string;
  __hmrId: string;
  install: Function;
  render: Function;
}
type a = Record<string, component>;
const exModules: a = {};

export default {
  install: (app: App) => {
    Object.entries(modules).forEach((module: any[]) => {
      const name = module[0].split('/')[1];
      exModules[name] = module[1].default;
      app.use(module[1].default);
    });
  },
  ...exModules
};
