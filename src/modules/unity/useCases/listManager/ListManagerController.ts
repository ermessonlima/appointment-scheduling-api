import { Request, Response } from "express";

import { ListManagerUseCase } from "./ListManagerUseCase";

class ListManagerController {
    constructor(private managerRepository: ListManagerUseCase) {}
    handle(request: Request, response: Response): Response {
        const managers = this.managerRepository.execute();

        return response.status(201).json(managers);
    }
}

export { ListManagerController };
