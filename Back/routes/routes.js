import { Router } from "express";
import { createUser } from "../controllers/registerControllers.js";
import { loginUser } from "../controllers/loginControllers.js";

export const router = Router();

router.post("/api/register",createUser);


router.post("/api/login",loginUser);