import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findByUser(user: string): Promise<User | undefined>;
};
