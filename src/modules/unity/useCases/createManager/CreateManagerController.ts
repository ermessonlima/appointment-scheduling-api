import { Request, Response } from "express";

import { CreateManagerUseCase } from "./CreateManagerUseCase";

class CreateManagerController {
    constructor(private createManagerUseCase: CreateManagerUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, cpf, email, phone } = request.body;

        this.createManagerUseCase.execute({ name, cpf, email, phone });

        return response.status(201).json();
    }
}

export { CreateManagerController };
