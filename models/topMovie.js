const mongoose = require('mongoose');

// Schéma Mongoose pour les films (correctement déclaré)
const schemaMovie = new mongoose.Schema({
    _id: String,
    title: { type: String, required: false },
    IMDB_Rating: { type: Number, required: false },
    Director: { type: String, required: false },
    Actors: { type: String, required: false },
    released: { type: String, required: false },
    genre: { type: String, required: false },
});

// Création du modèle
const Movie = mongoose.model('topMovie', schemaMovie);

// Connexion à la base MongoDB
const url = 'mongodb://127.0.0.1:27017/scrapping';

// Fonction pour récupérer tous les films
exports.getAllMovies = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
            .then(() => {
                return Movie.find({});
            })
            .then(movies => {
                mongoose.disconnect(); // Déconnexion propre
                resolve(movies); // Résolution des données récupérées
            })
            .catch(err => {
                mongoose.disconnect(); // Toujours se déconnecter en cas d'erreur
                reject(err);
            });
    });
};
