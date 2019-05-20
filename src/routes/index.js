/**
 * An Express route.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @return {undefined}
 */
export default async (req, res) => {
  res.render('index.html');
};
