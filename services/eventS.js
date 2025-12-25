import { reed_file, write_file } from "../fileHandle.js";

async function creatrEventS(event) {
  const events = await reed_file("data/events.json");
  events.push({
    eventName: event.eventName,
    ticketsForSale: event.ticketsForSale,
    username: event.username,
    password: event.password,
  });
  write_file(events, "data/events.json");
  console.log("event added to events", event);
  return {
    message: "Event created successfully",
  };
}

async function reedEvent(eventName) {
  const events = await reed_file("data/events.json");
  const event = events.find((event) => event.eventName === eventName);

  return event;
}

async function subtractChairs(eventName,num) {
  const events = await reed_file("data/events.json");
  const event = events.find((event) => event.eventName === eventName);
  event.ticketsForSale -= num;
  await write_file(events, "data/events.json");
}

export { creatrEventS, reedEvent, subtractChairs };
