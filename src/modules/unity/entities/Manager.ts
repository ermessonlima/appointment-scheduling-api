import { v4 as uuid } from "uuid";

class Manager {
    id?: string;
    name: string;
    cpf: string;
    email: string;
    phone: string;
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Manager };
