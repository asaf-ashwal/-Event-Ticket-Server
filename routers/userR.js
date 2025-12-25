import express from "express";
import userExist from "../midlewere/userExist.js";
import { creatReceiptsC } from "../controlers/receiptsC.js";
import { usersSummaryC } from "../controlers/userC.js";

const router = express.Router();


router.post("/tickets/buy", userExist,creatReceiptsC);


router.get("/:username/summary", usersSummaryC);


export default router;
