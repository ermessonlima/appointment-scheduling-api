import { v4 as uuid } from "uuid";

class Unity {
    id?: string;
    name: string;
    email: string;
    status: string;
    unityCode?: string;
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Unity };
