import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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
            throw new AppError("Unity already exists!");
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
