import { Manager } from "../model/Manager";
import { IManagerCreateDTO } from "./dto/Manager.dto";

class ManagerRepository {
    private managers: Manager[] = [];

    constructor() {
        this.managers = [];
    }

    create({ name, cpf, email, phone }: IManagerCreateDTO): Manager {
        const manager: Manager = new Manager();

        Object.assign(manager, {
            name,
            cpf,
            email,
            phone,
            created_at: new Date(),
        });

        this.managers.push(manager);

        return manager;
    }

    list(): Manager[] {
        return this.managers;
    }

    findByName(name: string): Manager {
        const manager = this.managers.find((manager) => manager.name === name);

        return manager;
    }
}

export { ManagerRepository };
