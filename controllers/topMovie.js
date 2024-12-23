const movieModel = require('../models/topMovie'); // Assurez-vous que le chemin est correct

// Contrôleur pour afficher les films
exports.moviesController = (req, res) => {
    movieModel.getAllMovies()
        .then(movies => {
            res.render('topMovies', { topMovies: movies }); // Rendu des films dans la vue
        })
        .catch(err => {
            console.error('Erreur lors de la récupération des films :', err);
            res.status(500).render('error', { message: 'Impossible de charger les films.' });
        });
};
