
import { creatReceiptS } from "../services/receiptsS.js";

async function creatReceiptsC(req, res) {
  try {
    const receipt = req.body;
    if (
      (!receipt.username||
      !receipt.password||
      !receipt.eventName||
      !receipt.quantity)
    ) {
      return res
        .status(401)
        .send("event most have eventName, quantity, username  and password");
    }
    const response = await creatReceiptS(receipt);
    res.send(response);
  } catch (err) {
    res.status(err.status || 401).send(err.msg || "creatReceiptsC err");
  }
}

export { creatReceiptsC };
