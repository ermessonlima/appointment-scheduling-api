import { UnityRepository } from "../../repositories/implementations/UnityRepository";

interface IRequest {
    name: string;
    email: string;
    status: string;
    unityCode?: string;
}

class CreateUnityUseCase {
    constructor(private unityRepository: UnityRepository) {}

    execute({ name, email, status, unityCode }: IRequest): void {
        const unityAlreadyExists = this.unityRepository.findByName(name);

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
