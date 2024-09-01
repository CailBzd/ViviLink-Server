import { IOrganizationRepository } from '../domain/IOrganizationRepository';
import { Organization } from '../domain/entities/Organization';

export class GetAllOrganizations {
  constructor(private organizationRepository: IOrganizationRepository) {}

  public async execute(): Promise<Organization[]> {
    return this.organizationRepository.findAll();
  }
}
