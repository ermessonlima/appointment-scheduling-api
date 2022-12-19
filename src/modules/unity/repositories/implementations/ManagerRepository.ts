import { Manager } from "../../entities/Manager";
import { IManagerCreateDTO } from "../dto/Manager.dto";
import { IManagerRepository } from "../IManagerRepository";

class ManagerRepository implements IManagerRepository {
    private managers: Manager[] = [];

    private static INSTANCE: ManagerRepository;

    private constructor() {
        this.managers = [];
    }

    public static getInstance(): ManagerRepository {
        if (!ManagerRepository.INSTANCE) {
            ManagerRepository.INSTANCE = new ManagerRepository();
        }

        return ManagerRepository.INSTANCE;
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
