import { Router } from "express";
import multer from "multer";

import { createUnityController } from "../modules/unity/useCases/createUnity";
import { importUnityController } from "../modules/unity/useCases/importUnity";
import { listUnityController } from "../modules/unity/useCases/listUnity";

const unityRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

unityRoutes.post("/", (req, res) => {
    return createUnityController.handle(req, res);
});

unityRoutes.get("/", (req, res) => {
    return listUnityController.handle(req, res);
});

unityRoutes.post("/import", upload.single("file"), (req, res) => {
    return importUnityController.handle(req, res);
});

export { unityRoutes };
