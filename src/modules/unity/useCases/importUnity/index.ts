import { ImportUnityController } from "./importUnityController";
import { ImportUnityUseCase } from "./importUnityUseCase";

const importUnityUseCase = new ImportUnityUseCase();
const importUnityController = new ImportUnityController(importUnityUseCase);

export { importUnityController };
