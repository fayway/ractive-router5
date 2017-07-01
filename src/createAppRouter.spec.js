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
    const router = createAppRouter(routes);
    expect(router.getOptions().defaultRoute).to.equal('about');
    expect(router.hasPlugin('LISTENERS_PLUGIN')).to.be.true;
    expect(router.hasPlugin('BROWSER_PLUGIN')).to.be.true;
    expect(router.hasPlugin('LOGGER_PLUGIN')).to.be.true;
  });
});