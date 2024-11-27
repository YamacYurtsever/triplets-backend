import { BadRequestError } from '../middleware/errorHandler';
import { Token } from '../models/authModel';
import { getNewUser, getUserFromEmail } from '../utils/userUtil';
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
  const data = getData();

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

/**
 * Logs in an existing user with the given email and password,
 * starting a new session for the user and returns it in a token.
 */

const authLogin = (email: string, password: string): Token => {
  const data = getData();
  const user = getUserFromEmail(email);

  // Validate input
  if (user === undefined) {
    throw new BadRequestError('Invalid email');
  }

  if (user.password !== password) {
    throw new BadRequestError('Incorrect password');
  }

  // Get a new session for the user and add it to the data
  const session = getNewSession(user.id);
  data.sessions.push(session);

  // Get a new token for the session and return it
  const token = getNewToken(session.id);
  return token;
};

const authLogout = (email: string, password: string) => {
  return {};
};

export { authRegister, authLogin, authLogout };
