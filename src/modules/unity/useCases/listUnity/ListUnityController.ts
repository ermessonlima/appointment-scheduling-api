import { Request, Response } from "express";

import { ListUnityUseCase } from "./ListUnityUseCase";

class ListUnityController {
    constructor(private unityRepository: ListUnityUseCase) {}
    handle(request: Request, response: Response): Response {
        const unitys = this.unityRepository.execute();

        return response.status(201).json(unitys);
    }
}

export { ListUnityController };
