import { NextFunction, Request, Response } from "express";

export function checkKey (req: Request, res: Response, next: NextFunction){
    const key = req.headers["x-api-key"].toString();

    if(!key){
        throw {
            type: "unauthorized",
            message:"invalid Key"
        };

        next();
    }
}