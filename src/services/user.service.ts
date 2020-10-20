import { User } from "../entity/user.entity";
import { getManager } from "typeorm";
import { CreateUserRequest } from "../types/user";

export class UserService {
  // TODO: add pagination
  getUsers = async () => {
    return await getManager()
      .find(User)
      .then((users) => ({
        status: "OK",
        code: "200",
        data: users,
      }))
      .catch((err) => ({
        status: "Bad Request",
        code: "401",
        data: err,
      }));
  };

  find = async (id: number) => {
    return await getManager()
      .findOne(User, id)
      .then((user) => ({
        status: "OK",
        code: "200",
        data: user || {},
      }))
      .catch((err) => ({
        status: "Bad Request",
        code: "401",
        data: err,
      }));
  };

  create = async (body: CreateUserRequest) => {
    return await getManager()
      .save(User, {
        name: body.name,
        phone: body.phone,
      })
      .then((user) => ({
        status: "OK",
        code: "200",
        data: user,
      }))
      .catch((err) => ({
        status: "Bad Request",
        code: "401",
        data: err,
      }));
  };
}
