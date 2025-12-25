import { reedUser } from "../services/userS.js";

export default async function userExist(req, res, next) {
  const userExist = await reedUser(req.body.username,req.body.password);
  if (!userExist) {
    return res.status(401).send("user most exist");
  }
  next();
}
