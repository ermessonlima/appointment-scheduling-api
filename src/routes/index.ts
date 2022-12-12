import { Router } from "express";

import { managerRoutes } from "./manager.routes";
import { unityRoutes } from "./unity.routes";

const router = Router();

router.use("/manager", managerRoutes);
router.use("/unity", unityRoutes);

export { router };
