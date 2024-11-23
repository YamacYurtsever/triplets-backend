import { Request, Response, Router } from 'express';
import { authRegister } from '../controllers/authController';
import { saveData } from '../data';

const authRouter = Router();

authRouter.post('/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const response = authRegister(name, email, password);
  saveData();
  return res.status(200).json(response);
});

authRouter.post('/login', (req: Request, res: Response) => {

});

authRouter.post('/logout', (req: Request, res: Response) => {

});

export default authRouter;
