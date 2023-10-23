const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render("movies/allMovies");
};

indexCtrl.createMovie = (req, res) => {
  res.render("movies/createMovie");
};

module.exports = indexCtrl;