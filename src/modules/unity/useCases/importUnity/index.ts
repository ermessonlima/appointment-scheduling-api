import { UnityRepository } from "../../repositories/implementations/UnityRepository";
import { ImportUnityController } from "./importUnityController";
import { ImportUnityUseCase } from "./importUnityUseCase";

export default () => {
    const unityRepository = new UnityRepository();
    const importUnityUseCase = new ImportUnityUseCase(unityRepository);
    const importUnityController = new ImportUnityController(importUnityUseCase);

    return importUnityController;
};
