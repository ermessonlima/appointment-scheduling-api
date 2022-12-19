import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUnityUseCase } from "./CreateUnityUseCase";

class CreateUnityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, status, unityCode } = request.body;

        const createUnityUseCase = container.resolve(CreateUnityUseCase);

        await createUnityUseCase.execute({
            name,
            email,
            status,
            unityCode,
        });

        return response.status(201).json();
    }
}

export { CreateUnityController };
