import { Data } from './models/dataModel';

const emptyData: Data = {
  users: [],
  sessions: [],
};

let data = emptyData;

const getData = () => {
  return data;
};

const setData = (newData: Data) => {
  data = newData;
};

const clearData = () => {
  data = emptyData;
  return {};
};

const saveData = () => {
  // Send data to database
};

const loadData = () => {
  // Send data to database
};

export { getData, setData, clearData, saveData, loadData };
