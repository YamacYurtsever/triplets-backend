import { Data } from './models/dataModel';

const emptyData: Data = {
  users: [],
}

let data = emptyData;

const getData = () => {
  return data;
}

const setData = (newData: Data) => {
  data = newData;
}

const clearData = () => {
  data = emptyData;
  return {};
}

export { getData, setData, clearData };
