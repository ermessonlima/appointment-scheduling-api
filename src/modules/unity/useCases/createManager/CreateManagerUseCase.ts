import { AppError } from "../../../../errors/AppError";
import { ManagerRepository } from "../../repositories/implementations/ManagerRepository";

interface IRequest {
    name: string;
    cpf: string;
    email: string;
    phone: string;
}

class CreateManagerUseCase {
    constructor(private managerRepository: ManagerRepository) {}

    execute({ name, cpf, email, phone }: IRequest): void {
        const managerAlreadyExists = this.managerRepository.findByName(name);

        if (managerAlreadyExists) {
            throw new AppError("Manager already exists!");
        }

        this.managerRepository.create({
            name,
            cpf,
            email,
            phone,
        });
    }
}

export { CreateManagerUseCase };
