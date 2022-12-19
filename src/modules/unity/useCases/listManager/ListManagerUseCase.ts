import { Manager } from "../../entities/Manager";
import { IManagerRepository } from "../../repositories/IManagerRepository";

class ListManagerUseCase {
    constructor(private managerRepository: IManagerRepository) {}

    execute(): Manager[] {
        console.log("ListManagerUseCase.execute()");
        const categories = this.managerRepository.list();

        return categories;
    }
}

export { ListManagerUseCase };
