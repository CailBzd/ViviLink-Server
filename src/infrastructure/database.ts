// src/infrastructure/database.ts
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Charger les variables d'environnement à partir du fichier .env ou development.env
dotenv.config();

// Charger et parser le fichier ormconfig.json
const ormConfigPath = path.resolve(__dirname, '../../ormconfig.json');
const ormConfig = JSON.parse(fs.readFileSync(ormConfigPath, 'utf8'));

// Remplacer les valeurs du JSON par les variables d'environnement si elles sont définies
ormConfig.host = process.env.DB_HOST || ormConfig.host;
ormConfig.port = Number(process.env.DB_PORT) || ormConfig.port;
ormConfig.username = process.env.DB_USERNAME || ormConfig.username;
ormConfig.password = process.env.DB_PASSWORD || ormConfig.password;
ormConfig.database = process.env.DB_NAME || ormConfig.database;

// Créer et exporter l'instance DataSource
export const AppDataSource = new DataSource(ormConfig);

// Fonction pour initialiser la base de données
export async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Quitte l'application si la connexion échoue
  }
}
