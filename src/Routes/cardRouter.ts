import { Router } from "express";
import * as cardController from "../Controllers/cardController.js";
import { checkKey } from "../Middlewares/keyValidation.js"
import { validateSchema } from "../Middlewares/schemaValidation.js";
import * as cardSchemas from "../Schemas/cardSchemas.js";

const cardRouter = Router();

cardRouter.post("/card", checkKey, validateSchema(cardSchemas.createCard), cardController.create);
cardRouter.patch("/card/:id/activate", validateSchema(cardSchemas.activateCard), cardController.activate);
cardRouter.get("/card/:id/info", cardController.getTransactions);
cardRouter.patch("card/:id/block", validateSchema(cardSchemas.cardPassword),cardController.block);
cardRouter.patch("card/:id/unblock");

export default cardRouter;