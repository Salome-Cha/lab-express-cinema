const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// Route to access the list of all movies:
router.get('/movies', (req, res, next) => {
    MovieModel.find()   // We are searching all the elements in the database answering to the MovieModel. To render them in the movie page.
    .then((allTheMoviesFromDB) => {
        console.log(allTheMoviesFromDB)
        res.render('movies', {movies: allTheMoviesFromDB})
    })
});


router.get('/movieDetails/:movieId', (req, res, next) => {
    let movieId = req.params.movieId;
    
    MovieModel.findById(movieId)   // We are searching all the elements in the database answering to the MovieModel. To render them in the movie page.
    .then((specificMovie) => {
        console.log(specificMovie)
        res.render('movieDetails', {OneMovie: specificMovie});
       
    })
 
});


module.exports = router;
