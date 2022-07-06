import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list()
    const foundUser = users.find(user => user.id === user_id);
    
    if(!foundUser.admin) {
      throw new Error('User should be an admin');
    }

    if(!foundUser) {
      throw new Error('User not found');
    }

    return users
  }
}

export { ListAllUsersUseCase };
