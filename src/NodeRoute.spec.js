import {describe, it, before, after} from 'mocha';
import {expect} from 'chai';
import Ractive from 'ractive';

import RouterProvider from './RouterProvider';
import NodeRoute from './NodeRoute';

import { fakeRouter } from './TestUtils'

describe('NodeRoute', () => {

  before(() => {
    Ractive.DEBUG = false;
    this.container = document.createElement('div');
  });

  after(() => {
    this.container.remove();
  });

  it('should by default not display its content', (done) => {
    new Ractive({
      el: this.container,
      components: {
        RouterProvider,
        NodeRoute
      },
      data: {
        fakeRouter
      },
      template: `
        <RouterProvider router="{{fakeRouter}}">
            <NodeRoute><div id="content"></div></NodeRoute>
        </RouterProvider>`,
      oncomplete(){
        expect(this.find('#content')).to.be.undefined;
        done();
      }
    })
  });

  it('should display its content only if route matches the routeName param', (done) => {
    new Ractive({
      el: this.container,
      components: {
        RouterProvider,
        NodeRoute
      },
      data: {
        fakeRouter
      },
      template: `
        <RouterProvider router="{{fakeRouter}}">
            <NodeRoute routeNode="home"><div id="content"></div></NodeRoute>
        </RouterProvider>`,
      oncomplete(){
        expect(this.find('#content')).to.be.undefined;
        //
        this.findComponent('RouterProvider').set('route', {name: 'bob'});
        expect(this.find('#content')).to.be.undefined;
        //
        this.findComponent('RouterProvider').set('route', {name: 'home'});
        expect(this.find('#content')).to.be.ok;
        done();
      }
    })
  });
});