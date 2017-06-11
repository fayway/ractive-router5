import { describe, it } from 'mocha';
import { expect } from 'chai';

import createAppRouter from './createAppRouter';

const routes =  [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
    default: true
  }
];

describe('createAppRouter', () => {
  it('should create a router with the right defaultRoute and right plugins', () => {
    const router = createAppRouter(routes, {useListenersPlugin: true});
    expect(router.getOptions().defaultRoute).to.equal('about');
    expect(router.hasPlugin('LISTENERS_PLUGIN')).to.be.true;
    expect(router.hasPlugin('BROWSER_PLUGIN')).to.be.true;
    expect(router.hasPlugin('LOGGER_PLUGIN')).to.be.true;
  });

  it('should create a router without a defaultRoute and the listenersPlugin if not required', () => {
    const router = createAppRouter([], {useListenersPlugin: false});
    expect(router.getOptions().defaultRoute).to.equal(undefined);
    expect(router.hasPlugin('LISTENERS_PLUGIN')).to.be.false;
    expect(router.hasPlugin('BROWSER_PLUGIN')).to.be.true;
    expect(router.hasPlugin('LOGGER_PLUGIN')).to.be.true;
  });
});