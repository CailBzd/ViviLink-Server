// vivilink/interfaces/controllers/OrganizationController.ts
import { Request, Response } from 'express';
import { GetAllOrganizations } from '../../use_cases/GetAllOrganizations';
import { OrganizationRepository } from '../gateways/OrganizationRepository';

export class OrganizationController {
  private getAllOrganizations: GetAllOrganizations;

  constructor() {
    const organizationRepository = new OrganizationRepository();
    this.getAllOrganizations = new GetAllOrganizations(organizationRepository);
  }

  /**
   * @swagger
   * /api/organizations:
   *   get:
   *     summary: Retrieve a list of organizations
   *     description: Retrieve a list of all organizations.
   *     responses:
   *       200:
   *         description: A list of organizations.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                     example: 1
   *                   name:
   *                     type: string
   *                     example: "My Organization"
   *       500:
   *         description: Internal server error.
   */
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const organizations = await this.getAllOrganizations.execute();
      res.json(organizations);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
}
