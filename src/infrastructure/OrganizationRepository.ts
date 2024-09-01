// src/infrastructure/OrganizationRepository.ts
import { Repository } from 'typeorm';
import { Organization } from '../domain/entities/Organization';
import { AppDataSource } from './database';

export class OrganizationRepository {
  private organizationRepo: Repository<Organization>;

  constructor() {
    // Utiliser AppDataSource pour obtenir le repository de l'entité Organization
    this.organizationRepo = AppDataSource.getRepository(Organization);
  }

  // Méthode pour récupérer toutes les organisations
  public async findAll(): Promise<Organization[]> {
    return await this.organizationRepo.find();
  }

  // Méthode pour trouver une organisation par ID
  public async findById(id: string): Promise<Organization | null> {
    return await this.organizationRepo.findOne({
      where: { id },
      relations: ['users'], // Exemple de chargement des relations (ex. utilisateurs)
    });
  }

  // Méthode pour sauvegarder une organisation (création ou mise à jour)
  public async save(organization: Organization): Promise<void> {
    await this.organizationRepo.save(organization);
  }

  // Méthode pour supprimer une organisation par ID
  public async deleteById(id: string): Promise<void> {
    await this.organizationRepo.delete(id);
  }
}
