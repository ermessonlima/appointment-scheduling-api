import { Request, Response } from "express";
import RegisterPost from "./RegisterPost";


export function registerPost(req: Request, res:Response) {
    RegisterPost.execute("Ermesson", "ermesson@hotmail.com", "active");
}