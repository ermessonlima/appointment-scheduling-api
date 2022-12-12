import { Unity } from "../model/Unity";
import { IUnityCreateDTO } from "./dto/Unity.dto";

interface IUnityRepository {
    findByName(name: string): Unity;
    list(): Unity[];
    create({ name, email, status, unityCode }: IUnityCreateDTO): void;
}

export { IUnityRepository };
