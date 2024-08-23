import express from "express";

import addController from "../controllers/addSchool.js";
import listSchool from "../controllers/listSchool.js";
import resetSchoolsTable from "../controllers/resetSchool.js";

const router = express.Router();

router.post("/addSchool", addController);

router.get("/listSchools", listSchool);

router.post("/resetSchools", resetSchoolsTable);

export default router;
