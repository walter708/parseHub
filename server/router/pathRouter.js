import { Router } from "express";
import { getPath } from "../controllers/pathController.js";

export const pathRouter = Router();

pathRouter.get("/path", getPath);
