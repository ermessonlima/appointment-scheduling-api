import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implematations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthentication(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("User does not exists", 401);
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(
            token,
            "f2091e84e0edfd087217848712c98b99"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists", 401);
        }

        next();
    } catch (error) {
        throw new AppError("Missing Token", 401);
    }
}
