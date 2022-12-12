import { UnityRepository } from "../../repositories/implementations/UnityRepository";
import { ListUnityController } from "./ListUnityController";
import { ListUnityUseCase } from "./ListUnityUseCase";

const unityRepository = UnityRepository.getInstance();
const listUnityUseCase = new ListUnityUseCase(unityRepository);

const listUnityController = new ListUnityController(listUnityUseCase);

export { listUnityController };
