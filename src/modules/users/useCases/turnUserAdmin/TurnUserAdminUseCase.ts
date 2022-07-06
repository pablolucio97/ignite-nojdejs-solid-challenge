import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const users = this.usersRepository.list()
    const foundUser = users.find(user => user.id === user_id)
    if(!foundUser) {
      throw new Error("User not found");
    }
    return foundUser
  }
}

export { TurnUserAdminUseCase };
