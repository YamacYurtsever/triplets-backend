import request, { HttpVerb, Response } from 'sync-request-curl';
import { port, url } from '../../config.json';
import { IncomingHttpHeaders } from 'http';

const SERVER_URL = `${url}:${port}`;
const TIMEOUT_MS = 5 * 1000;
const ERROR = { error: expect.any(String) };
const EMPTY = { };

const parseBody = (res: Response) => {
  return JSON.parse(res.body.toString());
};

const requestHelper = (
  method: HttpVerb,
  endpoint: string,
  headers: IncomingHttpHeaders = {},
  payload: object = {}
) => {
  let qs = {};
  let json = {};

  if (['GET', 'DELETE'].includes(method)) {
    qs = payload;
  } else {
    json = payload;
  }

  return request(method, SERVER_URL + endpoint, { headers, qs, json, timeout: TIMEOUT_MS });
};

export { ERROR, EMPTY, parseBody, requestHelper };
