import { Organization } from './entities/Organization';

export interface IOrganizationRepository {
  findAll(): Promise<Organization[]>;
  findById(id: string): Promise<Organization | null>;
  save(organization: Organization): Promise<void>;
  deleteById(id: string): Promise<void>;
}
