import { ERROR, parseBody } from '../utils/testUtil/testUtil';
import { requestDataClear } from '../utils/testUtil/dataTestUtil';
import {
  VALID_USER,
  INVALID_USERS,
  TOKEN,
  requestAuthRegister
} from '../utils/testUtil/authTestUtil';

beforeEach(() => {
  requestDataClear();
});

describe('POST /auth/register', () => {
  test.each(INVALID_USERS)('should return error for invalid user input', (invalidUser) => {
    const res = requestAuthRegister(invalidUser.name, invalidUser.email, invalidUser.password);
    expect(res.statusCode).toBe(400);
    expect(parseBody(res)).toStrictEqual(ERROR);
  });

  test('has correct return type', () => {
    const res = requestAuthRegister(VALID_USER.name, VALID_USER.email, VALID_USER.password);
    expect(parseBody(res)).toStrictEqual(TOKEN);
    expect(res.statusCode).toBe(200);
  });
});
