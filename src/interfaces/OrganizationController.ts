import { Request, Response } from 'express';
import { GetAllOrganizations } from '../application/GetAllOrganizations';
import { OrganizationRepository } from '../infrastructure/OrganizationRepository';

const organizationRepository = new OrganizationRepository();
const getAllOrganizations = new GetAllOrganizations(organizationRepository);

export class OrganizationController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const organizations = await getAllOrganizations.execute();
      res.json(organizations);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Ajoutez d'autres méthodes pour d'autres opérations, comme créer, mettre à jour, ou supprimer une organisation
}
