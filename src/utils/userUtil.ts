import { v4 as uuid } from 'uuid';
import { User } from '../models/userModel';
import { hashPassword } from './authUtil';
import { getData } from '../data';

const getNewUser = (name: string, email: string, password: string): User => {
  const newUser: User = {
    id: uuid(),
    name,
    email,
    password: hashPassword(password),
  };
  return newUser;
};

const getUserFromEmail = (email: string): User => {
  const data = getData();
  const user = data.users.find((user) => user.email === email);
  return user;
};

export { getNewUser, getUserFromEmail };
