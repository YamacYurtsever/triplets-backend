import { v4 as uuid } from 'uuid';
import { User } from '../models/userModel';
import { hashPassword } from './authUtil';

const getNewUser = (name: string, email: string, password: string): User => {
  const newUser: User = {
    id: uuid(),
    name,
    email,
    password: hashPassword(password),
  }
  return newUser;
}

export { getNewUser };
