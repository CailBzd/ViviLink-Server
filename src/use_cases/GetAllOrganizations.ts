// vivilink/use_cases/GetAllOrganizations.ts
import { OrganizationRepository } from '../interfaces/gateways/OrganizationRepository';

export class GetAllOrganizations {
  private organizationRepository: OrganizationRepository;

  constructor(organizationRepository: OrganizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  public async execute() {
    return await this.organizationRepository.findAll();
  }
}
