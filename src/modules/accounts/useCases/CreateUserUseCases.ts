import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({ name, email, cpf, unityCode, dateOfBirth, password }) {
        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            cpf,
            unityCode,
            dateOfBirth,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
