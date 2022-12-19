import { Unity } from "../entities/Unity";
import { IUnityCreateDTO } from "./dto/Unity.dto";

interface IUnityRepository {
    findByName(name: string): Promise<Unity>;
    list(): Promise<Unity[]>;
    create({ name, email, status, unityCode }: IUnityCreateDTO): Promise<Unity>;
}

export { IUnityRepository };
