// src/interfaces/routes.ts
import { Router } from 'express';
import { OrganizationController } from './controllers/OrganizationController';

const router = Router();
const organizationController = new OrganizationController();

// Définir les routes ici
router.get('/organizations', (req, res) => organizationController.getAll(req, res));

// Exporter le routeur pour qu'il soit utilisé dans le serveur principal
export default router;
