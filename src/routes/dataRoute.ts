import { Router } from 'express';
import { clearData } from '../data';

const dataRouter = Router();

dataRouter.delete('/clear', clearData);

export default dataRouter;
