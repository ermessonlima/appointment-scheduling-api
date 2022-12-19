import { getRepository, Repository } from "typeorm";

import { Unity } from "../../entities/Unity";
import { IUnityCreateDTO } from "../dto/Unity.dto";
import { IUnityRepository } from "../IUnityRepository";

class UnityRepository implements IUnityRepository {
    private repository: Repository<Unity>;

    constructor() {
        this.repository = getRepository(Unity);
    }

    async create({
        name,
        email,
        status,
        unityCode,
    }: IUnityCreateDTO): Promise<Unity> {
        const unity: Unity = this.repository.create({
            name,
            email,
            status,
            unityCode,
        });

        this.repository.save(unity);

        return unity;
    }

    async list(): Promise<Unity[]> {
        const unitys = await this.repository.find();

        return unitys;
    }

    async findByName(name: string): Promise<Unity> {
        const unity = await this.repository.findOne({
            name,
        });

        return unity;
    }
}

export { UnityRepository };
