import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {

    const emailAlreadyExists = this.usersRepository.findByEmail(email)

    if (email === '' || name === '') {
      throw new Error('Field all the fields')
    }

    if (emailAlreadyExists) {
      throw new Error('Email already exists')
    }

    const newUser = this.usersRepository.create({
      name,
      email,
    })
    return newUser

  }
}

export { CreateUserUseCase };
