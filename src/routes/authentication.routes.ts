import { Router } from "express";

import { UserAuthenticationController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();

const userAuthenticationController = new UserAuthenticationController();

authenticationRoutes.post("/", userAuthenticationController.handle);

export { authenticationRoutes };
