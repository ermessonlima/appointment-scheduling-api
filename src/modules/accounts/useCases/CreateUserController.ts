import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCases";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, cpf, unityCode, dateOfBirth, password } =
            request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        createUserUseCase.execute({
            name,
            email,
            cpf,
            unityCode,
            dateOfBirth,
            password,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
