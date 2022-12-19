import { Router } from "express";
import multer from "multer";

import { CreateUnityController } from "../modules/unity/useCases/createUnity/CreateUnityController";
import importUnityController from "../modules/unity/useCases/importUnity";
import { ListUnityController } from "../modules/unity/useCases/listUnity/ListUnityController";

const unityRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createUnityController = new CreateUnityController();
const listUnityController = new ListUnityController();

unityRoutes.post("/", createUnityController.handle);

unityRoutes.get("/", listUnityController.handle);

unityRoutes.post("/import", upload.single("file"), (req, res) => {
    return importUnityController().handle(req, res);
});

export { unityRoutes };
