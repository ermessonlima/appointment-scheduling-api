import { Router } from "express";

import { createManagerController } from "../modules/unity/useCases/createManager";
import { listManagerController } from "../modules/unity/useCases/listManager";

const managerRoutes = Router();

managerRoutes.post("/", (req, res) => {
    return createManagerController.handle(req, res);
});

managerRoutes.get("/", (req, res) => {
    return listManagerController.handle(req, res);
});

export { managerRoutes };
