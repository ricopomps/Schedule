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
  checkIfuserExists: User;
  token?: string;
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
    const checkIfuserExists = await this.usersRepository.findByUser(user);
    if (!checkIfuserExists) {
      throw new AppError('Incorrect Email or password.', 401);
    }

    const checkPassword = await this.hashProvider.compareHash(
      password,
      checkIfuserExists.password,
    );

    if (!checkPassword) {
      throw new AppError('Incorrect email od password.', 401);
    }

    return {
      checkIfuserExists,
    };
  }
}
export default AuthenticateUserService;
