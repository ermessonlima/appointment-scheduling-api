import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUnityUseCase } from "./ListUnityUseCase";

class ListUnityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const unityRepository = container.resolve(ListUnityUseCase);
        const unitys = await unityRepository.execute();

        return response.status(201).json(unitys);
    }
}

export { ListUnityController };
