import { IUsersRepository } from "./dto";

interface IUserRepository {
    create(data: IUsersRepository): Promise<void>;
    findByEmail(email: string): Promise<IUsersRepository>;
    findById(id: string): Promise<IUsersRepository>;
}

export { IUserRepository };
