import { Router } from "express";

import { ManagerRepository } from "../repositories/ManagerRepository";

const managerRoutes = Router();
const managerRepository = new ManagerRepository();

managerRoutes.post("/", (req, res) => {
    const { name, cpf, email, phone } = req.body;

    const managerAlreadyExists = managerRepository.findByName(name);

    if (managerAlreadyExists) {
        return res.status(400).json({ error: "Manager already exists!" });
    }

    const manager = managerRepository.create({
        name,
        cpf,
        email,
        phone,
    });

    return res.status(201).json(manager);
});

managerRoutes.get("/", (req, res) => {
    const managers = managerRepository.list();

    return res.status(201).json(managers);
});

export { managerRoutes };
