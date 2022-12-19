import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const userRoutes = Router();

const createUsersController = new CreateUserController();

userRoutes.post("/", createUsersController.handle);

export { userRoutes };
