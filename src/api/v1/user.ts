import express, { Request, Response } from "express";
import { CreateUserRequest } from "../../types/userTypes";
import { UserService } from "../../services/user.service";

const userRouter = express.Router();
const userService = new UserService();

userRouter.get("/", async (_req: Request, res: Response) => {
  const result = await userService.getUsers();
  res.json(result);
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.findOne(parseInt(id));
  res.json(result);
});

userRouter.post("/", async (req: Request, res: Response) => {
  const body: CreateUserRequest = req.body;
  const result = await userService.create(body);
  res.json(result);
});

export default userRouter;
