import render from './render';
import routes from '../routes';

export default app => {
  routes
    .filter(({ path }) => path !== '*')
    .forEach(({ path }) => app.get(path, (req, res) => render(req.path, res)));

  app.get('*', (req, res) => {
    res.status(404);
    render(req.path, res);
  });
};
