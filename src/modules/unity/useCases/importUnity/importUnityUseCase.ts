import { parse } from "csv-parse";
import fs from "fs";

import { IUnityRepository } from "../../repositories/IUnityRepository";

interface IImportUnity {
    name: string;
    email: string;
    status: string;
    unityCode: string;
}

class ImportUnityUseCase {
    constructor(private unityRepository: IUnityRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportUnity[]> {
        return new Promise((resolve) => {
            const stream = fs.createReadStream(file.path);
            const unity: IImportUnity[] = [];
            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, email, status, unityCode] = line;
                    unity.push({ name, email, status, unityCode });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(unity);
                })
                .on("error", (err) => {
                    console.log(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const unity = await this.loadCategories(file);

        unity.map(async (unity) => {
            const { name, email, status, unityCode } = unity;

            const unityAlreadyExists = await this.unityRepository.findByName(
                name
            );

            if (!unityAlreadyExists) {
                await this.unityRepository.create({
                    name,
                    email,
                    status,
                    unityCode,
                });
            }
        });
    }
}

export { ImportUnityUseCase };
