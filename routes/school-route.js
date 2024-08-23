import express from "express";

import addController from "../controllers/addSchool.js";
import listSchool from "../controllers/listSchool.js";

const router = express.Router();

router.post("/addSchool", addController);

router.get("/listSchools", listSchool);

export default router;
