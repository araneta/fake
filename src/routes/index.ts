import { Router } from "express";
import { InstallationController } from "../controllers";
const router = Router();

router.get("/feed", InstallationController.feed);
//router.put("/installations/:id");


export default router;
