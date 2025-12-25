import { reed_file, write_file } from "../fileHandle.js";

async function creatrUserS(newUser) {
  const users = await reed_file("data/users.json");
  const isExist = users.find((user) => user.username === newUser.username);
  if (isExist) {
    throw { msg: "user already exist", status: 401 };
  }
  users.push({ username: newUser.username, password: newUser.password });
  write_file(users, "data/users.json");
  console.log("user added to data", newUser);
  return {
    message: "User registered successfully",
  };
}


async function reedUser(username, password) {
  const users = await reed_file("data/users.json");
  const isExist = users.find(
    (user) => user.username === username && user.password === password
  );
  return isExist ? users : undefined;
}


async function usersSummaryS(username) {
  const users = await reed_file("data/users.json");
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw { msg: "user not exist", status: 401 };
  }
  const receipts = await reed_file("data/receipts.json");
  const userReceipts = receipts.filter(
    (receipt) => receipt.username === username
  );
  let totalTickets = 0;
  userReceipts.forEach((r) => totalTickets += r?.quantity);
  const res = {
    totalTicketsBought: totalTickets,
    events: userReceipts.map((r) => r.eventName),
    averageTicketsPerEvent: userReceipts?.length,
  };
  return res;
}

export { creatrUserS, reedUser, usersSummaryS };
