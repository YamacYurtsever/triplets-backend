import validator from 'email-validator';
import crypto from 'crypto';
import { v4 as uuid } from 'uuid';
import { getData } from '../data';
import { Session, Token } from '../models/authModel';
import {
  NAME_REGEX,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  PASSWORD_REGEXES,
  PASSWORD_MIN_LENGTH,
  SESSION_EXPIRATION_TIME
} from '../constants/authConstants';

const validateName = (name: string): boolean => {
  const isValidFormat = NAME_REGEX.test(name);
  const isValidLength = name.length >= NAME_MIN_LENGTH &&
                        name.length <= NAME_MAX_LENGTH;

  return isValidFormat && isValidLength;
};

const validateEmail = (email: string): boolean => {
  const data = getData();

  const isValidFormat = validator.validate(email);
  const isUsed = data.users.some((user) => user.email === email);

  return isValidFormat && !isUsed;
};

const validatePassword = (password: string): boolean => {
  const isValidFormat = PASSWORD_REGEXES.every((regex) => regex.test(password));
  const isValidLength = password.length >= PASSWORD_MIN_LENGTH;

  return isValidFormat && isValidLength;
};

const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

const getNewSession = (userId: string): Session => {
  const newSession: Session = {
    id: uuid(),
    user: userId,
    expiration: Date.now() + SESSION_EXPIRATION_TIME,
  };
  return newSession;
};

const getNewToken = (sessionId: string): Token => {
  const newToken: Token = {
    token: sessionId
  };
  return newToken;
};

export {
  validateName,
  validateEmail,
  validatePassword,
  hashPassword,
  getNewSession,
  getNewToken
};
