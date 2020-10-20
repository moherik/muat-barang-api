import express, { Request, Response } from 'express'

const userRouter = express.Router()

userRouter.get('/', (_req: Request, res: Response) => {
  res.send('all users')
})

export default userRouter