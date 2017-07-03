import Ractive from 'ractive';
import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
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

function createAppRouter$1(routes) {
  var defaultRouteConf = routes.find(function (route) { return route.default === true; });

  var router = createRouter(routes, {
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

var NodeRoute = Ractive.extend({
  template: "\n    {{#if active}}\n      {{yield}}\n    {{/if}}\n  ",
  data: {
    route: undefined,
    active: false
  },
  oninit: function oninit() {
    var this$1 = this;

    console.log('NodeRoute oninit', this.get('routeNode'));

    var routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('NodeRoute Component must be placed within a RouterProvider Component');
    }
    routerProvider.observe('route', function (route) {
      this$1.set('route', route);
      // console.log('Comparing new route with', this.get('routeNode'));
      this$1.set('active', route && route.name.indexOf(this$1.get('routeNode')) === 0);
    });
  }
});

Ractive.components.BaseLink = BaseLink;
Ractive.components.NodeRoute = NodeRoute;

var RouterProvider = Ractive.extend({
  data: {
    route: null
  },
  template: "\n      {{>content}}\n  ",
  oninit: function oninit() {
    var this$1 = this;

    this.router = this.get('router');

    this.mapRouteStateToData = function (toState) {
      this$1.set('route', toState);
    };

    this.router.addListener(this.mapRouteStateToData);
  },
  oncomplete: function oncomplete(){
    var routes = this.router.getRoutesConfig();
    var home = routes.find( function (route) { return route.home; });
    if (home) {
      this.router.start(home.path);
    }
  },
  onteardown: function onteardown() {
    this.router.removeListener(this.mapRouteStateToData);
  }
});

var index = {
  BaseLink: BaseLink,
  createRouter: createAppRouter$1,
  RouterProvider: RouterProvider,
  NodeRoute: NodeRoute
};

export { BaseLink, createAppRouter, RouterProvider, NodeRoute };export default index;
