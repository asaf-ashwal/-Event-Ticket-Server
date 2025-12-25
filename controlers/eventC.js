// import { creatrUserS } from "../services/userS.js";

import { creatrEventS } from "../services/eventS.js";

async function creatrEventsC(req, res) {
  try {
    const event = req.body;
    if (
      (!event.eventName,
      !event.ticketsForSale,
      !event.username,
      !event.password)
    ) {
     return res.status(401).send("event most have eventName, ticketsForSale, username  and password");
    }
    const response = await creatrEventS(event);
    res.send(response);
  } catch (err) {
    res.status(err.status || 401).send(err.msg || "creatrUserC err");
  }
}

export { creatrEventsC };
