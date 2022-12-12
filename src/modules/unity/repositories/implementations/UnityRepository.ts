import { Unity } from "../../model/Unity";
import { IUnityCreateDTO } from "../dto/Unity.dto";
import { IUnityRepository } from "../IUnityRepository";

class UnityRepository implements IUnityRepository {
    private unitys: Unity[] = [];

    private static INSTANCE: UnityRepository;

    private constructor() {
        this.unitys = [];
    }

    public static getInstance(): UnityRepository {
        if (!UnityRepository.INSTANCE) {
            UnityRepository.INSTANCE = new UnityRepository();
        }

        return UnityRepository.INSTANCE;
    }

    create({ name, email, status, unityCode }: IUnityCreateDTO): Unity {
        const unity: Unity = new Unity();

        Object.assign(unity, {
            name,
            email,
            status,
            unityCode,
            created_at: new Date(),
        });

        this.unitys.push(unity);

        return unity;
    }

    list(): Unity[] {
        return this.unitys;
    }

    findByName(name: string): Unity {
        const unity = this.unitys.find((unity) => unity.name === name);

        return unity;
    }
}

export { UnityRepository };
