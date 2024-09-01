// src/index.ts
import express from 'express';
import 'reflect-metadata'; // Nécessaire pour TypeORM
import { initializeDatabase } from './infrastructure/database'; // Import de la fonction d'initialisation de la DB
import router from './interfaces/routes'; // Import des routes de l'application

const app = express();
const port = 3000;

app.use(express.json()); // Middleware pour parser les requêtes JSON

// Définition de la fonction startServer
async function startServer() {
  // Appel de la fonction d'initialisation de la base de données
  await initializeDatabase();

  // Ajout des routes à l'application Express
  app.use(router);

  // Démarrage du serveur sur le port spécifié
  app.listen(port, () => {
    console.log(`ViviLink API is running on http://localhost:${port}`);
  });
}

// Appel de la fonction startServer pour démarrer l'application
startServer();
