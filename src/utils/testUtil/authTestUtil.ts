import { requestHelper } from './testUtil';

const TOKEN = { token: expect.any(String) };

const VALID_USER = {
  name: 'Mariocho',
  email: 'yamacyurtsever@hotmail.com',
  password: 'password123',
};

const INVALID_USERS = [
  { ...VALID_USER, name: 'asd&*$`22342' }, // Invalid name format
  { ...VALID_USER, name: 'a' }, // Short name length
  { ...VALID_USER, name: 'aaaaaaaaaaaaaaaaaaaaaaaaa' }, // Long name length
  { ...VALID_USER, email: 'invalid email' }, // Invalid email format
  { ...VALID_USER, password: 'aaaaaaaaaa' }, // Invalid password format
  { ...VALID_USER, password: '0123456789' }, // Invalid password format
  { ...VALID_USER, password: 'pas1' }, // Invalid password length
];

const requestAuthRegister = (name: string, email: string, password: string) => {
  const headers = {};
  const payload = { name, email, password };
  return requestHelper('POST', '/auth/register', headers, payload);
};

export { TOKEN, VALID_USER, INVALID_USERS, requestAuthRegister };
