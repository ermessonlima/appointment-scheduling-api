import { Manager } from "../model/Manager";
import { IManagerCreateDTO } from "./dto/Manager.dto";

interface IManagerRepository {
    findByName(name: string): Manager;
    list(): Manager[];
    create({ name, cpf, email, phone }: IManagerCreateDTO): void;
}

export { IManagerRepository };
