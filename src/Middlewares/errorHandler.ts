import { Request, Response, NextFunction } from "express";

export async function handleError(error, req: Request, res: Response, next: NextFunction){
    console.log(error);

    switch(error){
        case "badRequest": 
            res.sendStatus(400);
            break;
        case "unauthorized":
            res.sendStatus(401);
            break;
        case "notFound":
            res.sendStatus(404);
            break;
        case "conflict":
            res.sendStatus(409);
            break;
        case "unprocessableEntity":
            res.sendStatus(422);
            break;
        default: 
            res.sendStatus(500);
    }
}