import { Entity, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @Column()
  user: string;

  @Column()
  @Exclude()
  password: string;
}

export default User;
