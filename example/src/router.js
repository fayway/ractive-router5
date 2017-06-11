import createAppRouter from '../../src/createAppRouter';
import routes from './routes';

const router = createAppRouter(routes, {useListenersPlugin: true});

export default router;