// src/framework_drivers/web/ExpressServer.ts
import express from 'express';
import router from '../../interfaces/routes';
import { setupSwagger } from '../../interfaces/swagger';
import { initializeDatabase } from '../database';

const app = express();
const port = 7788;

// Adresse IP du serveur
// const host = '192.168.192.1';
const host = '192.168.1.59';

app.use(express.json());

// Configurer Swagger
setupSwagger(app);

// Initialiser la base de données et démarrer le serveur
async function startServer() {
  try {
    await initializeDatabase();

    // Utiliser les routes définies
    app.use(router);

    // Démarrer le serveur
    app.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
      console.log(`API Docs available at http://${host}:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
