import { ERROR, parseBody } from '../utils/testUtil/testUtil';
import { requestDataClear } from '../utils/testUtil/dataTestUtil';
import {
  VALID_USER,
  TOKEN,
  requestAuthRegister,
  requestAuthLogin
} from '../utils/testUtil/authTestUtil';

beforeEach(() => {
  requestDataClear();
});

describe('POST /auth/register', () => {
  beforeEach(() => {
    requestAuthRegister(VALID_USER.name, VALID_USER.email, VALID_USER.password);
  });

  test('returns error for incorrect email', () => {
    const res = requestAuthLogin('incorrect email', VALID_USER.password);
    expect(parseBody(res)).toStrictEqual(ERROR);
    expect(res.statusCode).toBe(400);
  });

  test('returns error for incorrect password', () => {
    const res = requestAuthLogin(VALID_USER.email, 'incorrect password');
    expect(parseBody(res)).toStrictEqual(ERROR);
    expect(res.statusCode).toBe(400);
  });

  test('has correct return type', () => {
    const res = requestAuthLogin(VALID_USER.email, VALID_USER.password);
    expect(parseBody(res)).toStrictEqual(TOKEN);
    expect(res.statusCode).toBe(200);
  });

  test('generates unique tokens for the same user at each login', () => {
    const res1 = requestAuthLogin(VALID_USER.email, VALID_USER.password);
    expect(parseBody(res1)).toStrictEqual(TOKEN);
    expect(res1.statusCode).toBe(200);

    const res2 = requestAuthLogin(VALID_USER.email, VALID_USER.password);
    expect(parseBody(res2)).toStrictEqual(TOKEN);
    expect(res2.statusCode).toBe(200);

    expect(parseBody(res1)).not.toStrictEqual(parseBody(res2));
  });
});
