import { Request, Response } from "express";

import { CreateUnityUseCase } from "./CreateUnityUseCase";

class CreateUnityController {
    constructor(private createUnityUseCase: CreateUnityUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email, status, unityCode } = request.body;

        this.createUnityUseCase.execute({ name, email, status, unityCode });

        return response.status(201).json();
    }
}

export { CreateUnityController };
