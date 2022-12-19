import { inject, injectable } from "tsyringe";

import { Unity } from "../../entities/Unity";
import { IUnityRepository } from "../../repositories/IUnityRepository";

@injectable()
class ListUnityUseCase {
    constructor(
        @inject("UnityRepository")
        private unityRepository: IUnityRepository
    ) {}

    async execute(): Promise<Unity[]> {
        const categories = await this.unityRepository.list();

        return categories;
    }
}

export { ListUnityUseCase };
