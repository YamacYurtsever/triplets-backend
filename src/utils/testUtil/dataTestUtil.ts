import { requestHelper } from './testUtil';

const requestDataClear = () => {
  const headers = {};
  const payload = {};
  return requestHelper('DELETE', '/data/clear', headers, payload);
};

export { requestDataClear };
