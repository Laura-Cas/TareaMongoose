const {Router} = require('express');
const router = Router();

const {renderMovies, createMovies, getAllMovies, renderEditMovie, updateMovies, deleteMovies} = require('../controllers/movies.controllers');

//create new movies
router.get('/movies/add',renderMovies);
router.post('/movies/new-movie',createMovies);

//list all movies
router.get('/movies', getAllMovies );

//update movies
router.get('/movies/edit/:id', renderEditMovie);

router.put('/movies/edit/:id', updateMovies )

//delete moves
router.delete('/movies/delete/:id', deleteMovies);

module.exports = router; 