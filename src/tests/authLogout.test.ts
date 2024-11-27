import { ERROR, EMPTY, parseBody } from '../utils/testUtil/testUtil';
import { requestDataClear } from '../utils/testUtil/dataTestUtil';
import {
  VALID_USER,
  requestAuthRegister,
  requestAuthLogout
} from '../utils/testUtil/authTestUtil';

beforeEach(() => {
  requestDataClear();
});

describe('POST /auth/register', () => {
  let token: string;
  beforeEach(() => {
    const res = requestAuthRegister(VALID_USER.name, VALID_USER.email, VALID_USER.password);
    token = parseBody(res).token;
  });

  test('returns error for invalid token', () => {
    const res = requestAuthLogout('invalid token');
    expect(parseBody(res)).toStrictEqual(ERROR);
    expect(res.statusCode).toBe(401);
  });

  test('has correct return type', () => {
    const res = requestAuthLogout(token);
    expect(parseBody(res)).toStrictEqual(EMPTY);
    expect(res.statusCode).toBe(200);
  });

  test('returns error when trying to logout multiple times using the same token', () => {
    const res1 = requestAuthLogout(token);
    expect(parseBody(res1)).toStrictEqual(EMPTY);
    expect(res1.statusCode).toBe(200);

    const res2 = requestAuthLogout(token);
    expect(parseBody(res2)).toStrictEqual(ERROR);
    expect(res2.statusCode).toBe(401);
  });
});
