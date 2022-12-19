import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { UsersRepository } from "../../repositories/implematations/UsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class UserAuthenticationUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            console.log("Email or password incorrect!");
        }

        const passworMatch = await compare(password, user.password);
        if (!passworMatch) {
            console.log("Email or password incorrect!");
        }

        const token = sign({}, "f2091e84e0edfd087217848712c98b99", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReponse: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReponse;
    }
}

export { UserAuthenticationUseCase };
