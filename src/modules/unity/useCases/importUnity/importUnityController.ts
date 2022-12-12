import { Response, Request } from "express";

import { ImportUnityUseCase } from "./importUnityUseCase";

class ImportUnityController {
    constructor(private importUnityUseCase: ImportUnityUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importUnityUseCase.execute(file);
        return response.send();
    }
}

export { ImportUnityController };
