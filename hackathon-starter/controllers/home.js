/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.scene = (req, res) => {
  res.render('scene', {
    title: 'Scene'
  });
};

