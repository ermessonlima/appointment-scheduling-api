import "reflect-metadata";
import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implematations/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { UnityRepository } from "../../modules/unity/repositories/implementations/UnityRepository";
import { IUnityRepository } from "../../modules/unity/repositories/IUnityRepository";

// IUnityRepository
container.registerSingleton<IUnityRepository>(
    "UnityRepository",
    UnityRepository
);

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UsersRepository
);
