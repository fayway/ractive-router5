import createAppRouter from '../../src/createAppRouter';
import routes from './routes';

const router = createAppRouter(routes, {useListenersPlugin: true});

router.getRoutesConfig = () => {
  return routes;
};

export default router;