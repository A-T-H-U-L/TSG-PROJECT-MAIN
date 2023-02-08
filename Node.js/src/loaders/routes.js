// Routes
const { API_PREFIX } = require('config');
const { AuthRoutes } = require('../components/Auth/auth.module');
const { TaxProRoutes } = require('../components/taxpro/taxpro.module');

const routes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/taxpro',
    route: TaxProRoutes
  }
];

module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.path, route.route);
  });
};
