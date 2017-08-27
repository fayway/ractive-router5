import { createRouter, loggerPlugin } from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

export const createAppRouter = (routes) => {
  const defaultRouteConf = routes.find(route => route.default === true);

  const router = createRouter(routes, {
      defaultRoute: defaultRouteConf ? defaultRouteConf.name : undefined,
      allowNotFound: true
    })
    .usePlugin(loggerPlugin)
    .usePlugin(listenersPlugin())
    .usePlugin(browserPlugin({
        useHash: true
      })
    );

  router.getRoutesConfig = () => { return routes };
  return router;

};

export default createAppRouter;
