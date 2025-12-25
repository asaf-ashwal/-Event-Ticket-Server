import { creatrUserS, reedUser, usersSummaryS } from "../services/userS.js";

async function creatrUserC(req, res) {
  try {
    const user = req.body;
    if ((!user.username, !user.password)) {
     return res.status(401).send("user most have username and password");
    }
    const response = await creatrUserS(user);
    res.send(response);
  } catch (err) {
    res.status(err.status || 401).send(err.msg || err);
  }
}


async function usersSummaryC(req, res) {
  try {
  const username = req.params.username;
  const response = await usersSummaryS(username);
    res.send(response);
}
  catch (err) {
    res.status(err.status || 401).send(err.msg || err);
  }
}


export { creatrUserC, usersSummaryC };
