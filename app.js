import express from "express";
import errorHandler from "./errorHandler.js";
import { creatFiles } from "./fileHandle.js";
import { creatrUserC } from "./controlers/userC.js";
import { creatrEventsC } from "./controlers/eventC.js";


const app = express();
const port = 3321;

creatFiles()
app.use(express.json());

// app.use("/users", usersR);
// app.use("/events", agentsR);
// app.use("/receipts", reportsR);
app.use(errorHandler);


app.post("/user/register", creatrUserC);
app.post("/creator/events", creatrEventsC);


app.listen(port, () => console.log(`setrver runing on port ${port}`));