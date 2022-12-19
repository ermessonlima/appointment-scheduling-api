import { Router } from "express";

import { managerRoutes } from "./manager.routes";
import { unityRoutes } from "./unity.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/manager", managerRoutes);
router.use("/unity", unityRoutes);
router.use("/users", userRoutes);

export { router };
