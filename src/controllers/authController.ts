import { BadRequestError } from '../middleware/errorHandler';
import { Token } from '../models/authModel';
import { getNewUser } from '../utils/userUtil';
import { getData } from '../data';
import {
  validateName,
  validateEmail,
  validatePassword,
  getNewSession,
  getNewToken
} from '../utils/authUtil';

/**
 * Registers a new user with the given name, email, and password.
 * Then starts a new session for the user and returns it in a token.
 */

const authRegister = (name: string, email: string, password: string): Token => {
  // Validate input
  if (!validateName(name)) {
    throw new BadRequestError('Invalid username');
  }

  if (!validateEmail(email)) {
    throw new BadRequestError('Invalid email');
  }

  if (!validatePassword(password)) {
    throw new BadRequestError('Invalid password');
  }

  const data = getData();

  // Get a new user and add it to the data
  const user = getNewUser(name, email, password);
  data.users.push(user);

  // Get a new session for the user and add it to the data
  const session = getNewSession(user.id);
  data.sessions.push(session);

  // Get a new token for the session and return it
  const token = getNewToken(session.id);
  return token;
};

const authLogin = (email: string, password: string): Token => {
  return { token: '' };
};

const authLogout = (email: string, password: string) => {
  return {};
};

export { authRegister, authLogin, authLogout };
