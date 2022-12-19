import { Repository, getRepository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepository } from "../dto";
import { IUserRepository } from "../IUserRepository";

class UsersRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        cpf,
        unityCode,
        dateOfBirth,
        password,
    }: IUsersRepository): Promise<void> {
        const user = await this.repository.create({
            name,
            email,
            cpf,
            unityCode,
            dateOfBirth,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            id,
        });

        return user;
    }
}

export { UsersRepository };
