import { Data } from './models/dataModel';

const emptyData: Data = {
  users: [],
  sessions: [],
};

let data: Data = JSON.parse(JSON.stringify(emptyData));

const getData = () => {
  return data;
};

const setData = (newData: Data) => {
  data = newData;
};

const clearData = () => {
  data = JSON.parse(JSON.stringify(emptyData));
};

const saveData = () => {
  // Send data to database
};

const loadData = () => {
  // Get data from database
};

export { getData, setData, clearData, saveData, loadData };
