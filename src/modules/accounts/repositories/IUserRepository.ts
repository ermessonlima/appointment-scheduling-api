import { IUsersRepository } from "./dto";

interface IUserRepository {
    create(data: IUsersRepository): Promise<void>;
}

export { IUserRepository };
