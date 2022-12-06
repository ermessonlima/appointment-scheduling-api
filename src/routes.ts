import { Request, Response } from "express";

import CreateManager from "./CreateManager";

export function createManager(req: Request, res: Response) {
    CreateManager.execute({
        name: "Ermesson",
        cpf: "cpf",
        email: "ermesson@hotmail.com",
        phone: "phone",
    });
}
