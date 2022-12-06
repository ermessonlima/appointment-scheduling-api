/*
 * Name
 * CPF
 * Email
 * Phone
 */
interface IManager {
    name: string;
    cpf: string;
    email: string;
    phone: string;
}

class CreateManager {
    execute({ name, cpf, email, phone }: IManager) {
        console.log(name, cpf, email, phone);
    }
}

export default new CreateManager();
