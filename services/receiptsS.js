import { reed_file, write_file } from "../fileHandle.js";
import { reedEvent, subtractChairs } from "./eventS.js";

async function creatReceiptS(receipt) {
  const event = await reedEvent(receipt.eventName);
  if (event.ticketsForSale < receipt.quantity) {
    return "no sits avelabol";
  }
  if (!event) {
    throw { status: 401, msg: "event most exist" };
  }
  const receipts = await reed_file("data/receipts.json");
  receipts.push({
    username: receipt.username,
    password: receipt.password,
    eventName: receipt.eventName,
    quantity: receipt.quantity,
  });
  await subtractChairs(receipt.eventName,receipt.quantity);
  await write_file(receipts, "data/receipts.json");
  return { message: "Tickets purchased successfully" };
}

export { creatReceiptS };
