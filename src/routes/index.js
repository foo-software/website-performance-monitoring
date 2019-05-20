/**
 * An Express route.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @return {undefined}
 */
export default async (req, res) => {
  const time = () => (new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  }));

  await time();

  res.render('index.html');
};
