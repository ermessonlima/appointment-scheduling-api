import { ManagerRepository } from "../../repositories/implementations/ManagerRepository";
import { ListManagerController } from "./ListManagerController";
import { ListManagerUseCase } from "./ListManagerUseCase";

const managerRepository = ManagerRepository.getInstance();
const listManagerUseCase = new ListManagerUseCase(managerRepository);

const listManagerController = new ListManagerController(listManagerUseCase);

export { listManagerController };
