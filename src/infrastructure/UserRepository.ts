// src/infrastructure/UserRepository.ts
import { Repository } from 'typeorm';
import { User } from '../domain/entities/User';
import { AppDataSource } from './database';

export class UserRepository {
  private userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User); // Utiliser AppDataSource
  }

  public async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  // Autres méthodes pour interagir avec les utilisateurs...
}
