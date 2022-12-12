import { Unity } from "../../model/Unity";
import { IUnityRepository } from "../../repositories/IUnityRepository";

class ListUnityUseCase {
    constructor(private unityRepository: IUnityRepository) {}

    execute(): Unity[] {
        const categories = this.unityRepository.list();

        return categories;
    }
}

export { ListUnityUseCase };
