// src/framework_drivers/web/ExpressServer.ts
import 'dotenv/config'; // Doit être la première importation

import express from 'express';
import passport from 'passport';
import routes from '../../interfaces/routes';
import { setupSwagger } from '../../interfaces/swagger';
import { initializeDatabase } from '../database';

const app = express();
const host = process.env.IP || '192.168.192.1';
const port = process.env.PORT || 3000;

app.use(express.json());

// Configurer Swagger
setupSwagger(app);

// Initialiser la base de données
initializeDatabase();

// Initialiser Passport
app.use(passport.initialize());

// Utiliser les routes
app.use('/api', routes);

// Démarrer le serveur
try {
  app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
    console.log(`API Docs available at http://${host}:${port}/api-docs`);
  });
}
catch (error) {
  console.error('Failed to start server:', error);
  process.exit(1);
}

