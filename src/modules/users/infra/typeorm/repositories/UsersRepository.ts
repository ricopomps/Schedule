import { getRepository, Repository } from 'typeorm';
import IUsersRepository from '../../../repositories/IUsersRepository';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByUser(user: string): Promise<User | undefined> {
    const correctUser = await this.ormRepository.findOne({
      where: { user },
    });

    return correctUser;
  }
}

export default UsersRepository;
