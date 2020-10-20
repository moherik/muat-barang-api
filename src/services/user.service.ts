import { User } from "../entity/user.entity"
import {getManager} from "typeorm"

export class UserService {
    public getAllUsers = async () => {
        return await getManager().find(User)
    }
}