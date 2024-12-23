const express = require('express');
const path = require('path');
const app = express();
const moviesRouter = require('./router/topMoviesRouter');

// Définir le port
const PORT = process.env.PORT || 3000;

// Définir le moteur de vue sur EJS
app.set('view engine', 'ejs');

// Définir le répertoire des vues
app.set('views', 'views');

// Middleware pour servir les fichiers statiques (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation du routeur pour gérer les routes des films
app.use('/', moviesRouter);

// Middleware de gestion des erreurs pour les pages non trouvées (404)
app.use((req, res) => {
    res.status(404).render('error', { message: 'Page non trouvée.' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
