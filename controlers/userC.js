
import { creatrUserS } from "../services/userS.js";

async function creatrUserC(req, res) {
  try {
    const user = req.body;
    if ((!user.username, !user.password)) {
      res.status(401).send("user most have username and password");
    }
    const response = await creatrUserS(user);
    res.send(response);
  } catch (err) {
    res.status(err.status || 401).send(err.msg || "creatrUserC err");
  }
}

export {creatrUserC}