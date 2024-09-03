// src/framework_drivers/web/ExpressServer.ts
import 'dotenv/config'; // Doit être la première importation

import express from 'express';
import passport from 'passport';
import routes from '../../interfaces/routes';
import { initializeDatabase } from '../database';

const app = express();
const port = process.env.PORT || 3000;

// Vérifiez ici si JWT_SECRET est défini
console.log('JWT_SECRET:', process.env.JWT_SECRET);

app.use(express.json());

// Initialiser la base de données
initializeDatabase();

// Initialiser Passport
app.use(passport.initialize());

// Utiliser les routes
app.use(routes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
