// src/interfaces/routes.ts
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { OrganizationController } from './controllers/OrganizationController';
import { AuthController } from './controllers/AuthController';
import { auth } from '../middleware/auth';

const router = Router();
const organizationController = new OrganizationController();
const authController = new AuthController();

// Middleware pour gérer les erreurs de validation
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Routes d'authentification
router.post(
  '/register',
  [
    // Validation des entrées
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required'),
  ],
  (req, res) => authController.register(req, res)
);

router.post(
  '/login',
  [
    // Validation des entrées
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  (req, res) => authController.login(req, res)
);

// Routes protégées
router.get('/organizations', auth, (req, res) => organizationController.getAll(req, res));

// Exporter le routeur pour qu'il soit utilisé dans le serveur principal
export default router;
