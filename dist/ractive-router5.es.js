import Ractive from 'ractive';
import { createRouter, loggerPlugin } from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

var BaseLink = Ractive.extend({
  template: "\n    <a href=\"{{path}}\" class=\"{{linkClassName}}\">\n        {{>content}}\n    </a>\n  ",
  data: {
    activeClassName: 'active',
    strictEquality: true,
    ignoreQueryParams: true
  },
  getRouter: function getRouter() {
    var routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('BaseLink Component must be placed within a RouterProvider Component');
    }
    return routerProvider.get('router');
  },
  oninit: function oninit() {
    var this$1 = this;

    this.router = this.getRouter();

    var path = this.router.buildPath(this.get('routeName'), this.get('routeParams'));
    this.set('path', ("/#" + path));

    this.isActive = function () {
      var isActive = this$1.router.isActive(this$1.get('routeName'), this$1.get('routeParams'), this$1.get('strictEquality'), this$1.get('ignoreQueryParams'));
      var ClassNameArray = this$1.get('className') ? this$1.get('className').split(' ') : [];
      var linkClassName = ClassNameArray.concat(isActive ? [this$1.get('activeClassName')] : []).join(' ');
      this$1.set('linkClassName', linkClassName);
    };

    this.set('linkClassName', this.get('className'));
    this.router.addListener(this.isActive);
  },
  onteardown: function onteardown() {
    this.router.removeListener(this.isActive);
  }
});

var createAppRouter = function (routes) {
  var defaultRouteConf = routes.find(function (route) { return route.default === true; });

  var router = createRouter(routes, {
      defaultRoute: defaultRouteConf ? defaultRouteConf.name : undefined,
      allowNotFound: true
    })
    .usePlugin(loggerPlugin)
    .usePlugin(listenersPlugin())
    .usePlugin(browserPlugin({
        useHash: true
      })
    );

  router.getRoutesConfig = function () { return routes };
  return router;

};

var NodeRoute = Ractive.extend({
  name: 'NodeRoute',
  template: "\n  {{#if isActive}}\n    {{yield}}\n  {{/if}}\n  ",
  oninit: function oninit() {
    var this$1 = this;

    if (Ractive.DEBUG) {
      console.log('NodeRoute Init', this.get('name'));
    }

    var routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('NodeRoute Component must be placed within a RouterProvider Container');
    }

    this.router  = routerProvider.get('router');

    this.listener = function (toState) {
      this$1.set('isActive', toState.name.indexOf(this$1.get('name')) === 0);
      this$1.set('route', toState);
    };
    this.router.addListener(this.listener);
  },
  onteardown: function onteardown() {
    this.router.removeListener(this.listener);
  }
});

var RouterProvider = Ractive.extend({
  name: 'RouterProvider',
  template: "\n    {{#if ready}}\n      {{>content}}\n    {{/if}}\n  ",
  data: {
    ready: false
  },
  oninit: function oninit() {
    if (Ractive.DEBUG) {
      console.log('RouterProvider init');
    }
  },
  oncomplete: function oncomplete() {
    var this$1 = this;

    console.log('RouterProvider complete');
    var ref = this.get();
    var router = ref.router;


    router.start('home', function () { return this$1.set('ready', true); });
  }
});

Ractive.components.RouterProvider = RouterProvider;
Ractive.components.NodeRoute = NodeRoute;
Ractive.components.BaseLink = BaseLink;

var index = {
  BaseLink: BaseLink,
  createRouter: createAppRouter,
  RouterProvider: RouterProvider,
  NodeRoute: NodeRoute
};

export { BaseLink, createAppRouter as createRouter, RouterProvider, NodeRoute };export default index;
