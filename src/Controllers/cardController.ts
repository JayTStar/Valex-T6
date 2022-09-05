import { Request, Response } from "express";
import { TransactionTypes } from "../Repositories/cardRepository.js";

import * as Services from "../Services/cardService.js";

interface CreateCardBody {
    employeeId: number;
    type: TransactionTypes;
}

interface Employee {
    id: number;
    fullName: string;
    cpf: string;
    email: string;
    companyId: number;
}

interface ActivateCardBody {
    cvc: string;
    password: string;
}

export async function create(req: Request, res: Response){
    const cardData: CreateCardBody = req.body;
    const employeeData: Employee = res.locals.employee;

    await Services.createCard(employeeData, cardData.type);

    res.sendStatus(201);
}

export async function activate(req: Request, res: Response) {
    const cardId = parseInt(req.params.cardId);

    if (isNaN(cardId) || !cardId) {
        throw {
            type: "unprocessableEntity",
            message: "Invalid cardId",
        };
    }

    const { cvc, password }: ActivateCardBody = req.body;

    await Services.activateCard(cardId, cvc, password);

    res.sendStatus(200);
}

export async function getTransactions(req: Request, res: Response) {
    const cardId = parseInt(req.params.cardId);

    if (!cardId || isNaN(cardId)) {
        throw {
            type: "unprocessableEntity",
            message: "Invalid cardId",
        };
    }

    const transactions = await Services.getTransactions(cardId);

    res.send(transactions);
}

export async function block(req: Request, res: Response) {
    const cardId = parseInt(req.params.cardId);
    const password: string = req.body.password;

    if (!cardId || isNaN(cardId)) {
        throw {
            type: "unprocessableEntity",
            message: "Invalid cardId",
        };
    }

    await Services.blockCard(cardId, password);

    res.sendStatus(200);
}