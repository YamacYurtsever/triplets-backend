import { Request, Response, Router } from 'express';
import { clearData } from '../data';

const dataRouter = Router();

dataRouter.delete('/clear', (req: Request, res: Response) => {
  const request = clearData();
  return res.json(request);
});

export default dataRouter;
