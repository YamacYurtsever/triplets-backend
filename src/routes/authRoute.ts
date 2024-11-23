import { Request, Response, Router } from 'express';
import { authRegister } from '../controllers/authController';
import { saveData } from '../data';

const authRouter = Router();

authRouter.post('/register', (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const response = authRegister(username, email, password);
  saveData();
  return res.status(200).json(response);
});

authRouter.post('/login', (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const response = authRegister(username, email, password);
  saveData();
  return res.status(200).json(response);
});

authRouter.post('/logout', (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const response = authRegister(username, email, password);
  saveData();
  return res.status(200).json(response);
});

export default authRouter;
