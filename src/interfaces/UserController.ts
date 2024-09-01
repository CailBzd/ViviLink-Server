import { Request, Response } from 'express';
import { GetAllUsers } from '../application/GetAllUsers';
import { UserRepository } from '../infrastructure/UserRepository';

const userRepository = new UserRepository();
const getAllUsers = new GetAllUsers(userRepository);

export class UserController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await getAllUsers.execute();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Ajoutez d'autres méthodes pour d'autres opérations, comme créer, mettre à jour, ou supprimer un utilisateur
}
