import { Request, Response, Router } from 'express';
import { clearData, saveData } from '../data';

const dataRouter = Router();

dataRouter.delete('/clear', (req: Request, res: Response) => {
  const request = clearData();
  saveData();
  return res.status(200).json(request);
});

export default dataRouter;
