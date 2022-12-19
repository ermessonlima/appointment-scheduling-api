import { inject, injectable } from "tsyringe";

import { IUnityRepository } from "../../repositories/IUnityRepository";

interface IRequest {
    name: string;
    email: string;
    status: string;
    unityCode?: string;
}

@injectable()
class CreateUnityUseCase {
    constructor(
        @inject("UnityRepository")
        private unityRepository: IUnityRepository
    ) {}

    async execute({ name, email, status, unityCode }: IRequest): Promise<void> {
        const unityAlreadyExists = await this.unityRepository.findByName(name);

        if (unityAlreadyExists) {
            throw new Error("Unity already exists!");
        }

        this.unityRepository.create({
            name,
            email,
            status,
            unityCode,
        });
    }
}

export { CreateUnityUseCase };
