import indexRouter from '../routes';

/**
 * Attaches routes to our Express route and error handling.
 *
 * @param {string} app An instance of Express.
 */
export default (app) => {
  app.get('/index', indexRouter);

  // 404
  app.use((req, res) => {
    return res.status(404).send('page not found');
  });

  // error handling
  app.use((error, req, res, next) => {
    return res.status(500).send('something went wrong');
  });
};
