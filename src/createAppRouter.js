import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

export default function createAppRouter(routes) {
  const defaultRouteConf = routes.find(route => route.default === true);

  const router = createRouter(routes, {
      defaultRoute: defaultRouteConf ? defaultRouteConf.name : undefined,
      allowNotFound: true,
      autoCleanUp: false
    })
    .usePlugin(loggerPlugin)
    .usePlugin(listenersPlugin())
    .usePlugin(browserPlugin({
      useHash: true
    }));

  return router;
}
