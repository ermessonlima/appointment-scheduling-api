import { UnityRepository } from "../../repositories/implementations/UnityRepository";
import { CreateUnityController } from "./CreateUnityController";
import { CreateUnityUseCase } from "./CreateUnityUseCase";

const unityRepository = UnityRepository.getInstance();

const createUnityUseCase = new CreateUnityUseCase(unityRepository);

const createUnityController = new CreateUnityController(createUnityUseCase);

export { createUnityController };
