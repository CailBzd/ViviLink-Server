import { IUserRepository } from '../domain/IUserRepository';
import { User } from '../domain/entities/User';

export class GetAllUsers {
  constructor(private userRepository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
