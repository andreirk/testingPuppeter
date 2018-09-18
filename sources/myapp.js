import { JetApp, EmptyRouter, HashRouter } from 'webix-jet';
import './styles/main.less';

/*eslint-disable */
export default class MyApp extends JetApp {
  constructor(config) {
    const defaults = {
      id: APPNAME,
      version: VERSION,
      router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
      debug: !PRODUCTION,
      start: '/top/budget.budget-home',
    };

    super({ ...defaults, ...config });
  }
}

if (!BUILD_AS_MODULE) {
  webix.ready(() => new MyApp().render());
}
/* eslint-enable */

