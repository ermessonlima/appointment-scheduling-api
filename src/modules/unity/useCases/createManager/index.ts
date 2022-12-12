import { ManagerRepository } from "../../repositories/implementations/ManagerRepository";
import { CreateManagerController } from "./CreateManagerController";
import { CreateManagerUseCase } from "./CreateManagerUseCase";

const managerRepository = ManagerRepository.getInstance();

const createManagerUseCase = new CreateManagerUseCase(managerRepository);

const createManagerController = new CreateManagerController(
    createManagerUseCase
);

export { createManagerController };
