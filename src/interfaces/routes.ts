import { Router } from 'express';
import { UserController } from './UserController';
import { OrganizationController } from './OrganizationController';

const router = Router();
const userController = new UserController();
const organizationController = new OrganizationController();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', userController.getAll.bind(userController));

/**
 * @swagger
 * /organizations:
 *   get:
 *     summary: Retrieve a list of organizations
 *     responses:
 *       200:
 *         description: A list of organizations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 */
router.get('/organizations', organizationController.getAll.bind(organizationController));

export default router;
