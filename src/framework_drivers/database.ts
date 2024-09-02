// src/framework_drivers/database.ts
import { DataSource } from 'typeorm';
import path from 'path';

// Charger le fichier ormconfig.json à partir de la racine du projet
const ormConfigPath = path.resolve(__dirname, '../../ormconfig.json');
const ormConfig = require(ormConfigPath);

export const AppDataSource = new DataSource(ormConfig);

export async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}
