import { User } from "../entity/User";
import { getManager } from "typeorm";
import { CreateUserRequest } from "../types/userTypes";
import { serviceResponse } from "../utils/serviceResponse";

export class UserService {
  // TODO: add pagination
  getUsers = async () => {
    return await getManager()
      .find(User)
      .then((users) =>
        serviceResponse({ code: 200, status: "OK", data: users })
      )
      .catch((err) =>
        serviceResponse({ code: 401, status: "Bad Request", data: err })
      );
  };

  findOne = async (id: number) => {
    return await getManager()
      .findOne(User, id)
      .then((user) => serviceResponse({ code: 200, status: "OK", data: user }))
      .catch((err) =>
        serviceResponse({ code: 401, status: "Bad Request", data: err })
      );
  };

  create = async (body: CreateUserRequest) => {
    return await getManager()
      .save(User, {
        name: body.name,
        phone: body.phone,
      })
      .then((user) => serviceResponse({ code: 200, status: "OK", data: user }))
      .catch((err) =>
        serviceResponse({ code: 401, status: "Bad Request", data: err })
      );
  };
}
