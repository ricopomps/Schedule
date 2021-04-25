import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user: string;
  password: string;
}
interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async run({ user, password }: IRequest): Promise<IResponse> {
    const users = await this.usersRepository.findByUser(user);
    if (!users) {
      throw new AppError('Incorrect Email or password.', 401);
    }

    const CheckPassword = await this.hashProvider.compareHash(
      password,
      users.password,
    );
  }
}
export default AuthenticateUserService;
