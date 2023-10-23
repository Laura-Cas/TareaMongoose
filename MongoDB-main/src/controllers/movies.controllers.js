const moviesCtrl = {};
const movie = require( '../models/movie')

moviesCtrl.renderMovies = (req, res)=>{
    res.render('movies/createMovie')
};

moviesCtrl.createMovies = async (req, res)=>{
    const {title, year, genre, director, description} = req.body;
    const newMovie = new movie({title, year, genre, director, description })
    await newMovie.save();
    res.redirect('/movies');
};

moviesCtrl.getAllMovies = async (req, res)=>{
    const movies = await movie.find();
    res.render('movies/allMovies', {movies});
};

moviesCtrl.renderEditMovie = async (req, res) => {
    const movieToEdit = await movie.findById(req.params.id);
    res.render('movies/editMovie', {movieToEdit});
};


moviesCtrl.updateMovies = async (req, res) => {
    const { title, year, genre, director, description } = req.body;
    await movie.findByIdAndUpdate(req.params.id, { title, year, genre, director, description });
    res.redirect('/movies');
};


moviesCtrl.deleteMovies = async (req, res)=>{
   await movie.findByIdAndDelete(req.params.id)
    res.redirect('/movies')
};

module.exports = moviesCtrl;