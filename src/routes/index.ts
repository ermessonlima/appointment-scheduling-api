import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { managerRoutes } from "./manager.routes";
import { unityRoutes } from "./unity.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/manager", managerRoutes);
router.use("/unity", unityRoutes);
router.use("/users", userRoutes);
router.use("/sessions", authenticationRoutes);
export { router };
