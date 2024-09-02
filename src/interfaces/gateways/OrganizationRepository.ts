// vivilink/interfaces/gateways/OrganizationRepository.ts
import { Repository } from 'typeorm';
import { Organization } from '../../entities/Organization';
import { AppDataSource } from '../../framework_drivers/database';

export class OrganizationRepository {
  private organizationRepo: Repository<Organization>;

  constructor() {
    this.organizationRepo = AppDataSource.getRepository(Organization);
  }

  public async findAll(): Promise<Organization[]> {
    console.log("findAll");
    return await this.organizationRepo.find();
  }
}
