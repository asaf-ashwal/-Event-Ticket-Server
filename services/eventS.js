import { reed_file, write_file } from "../fileHandle.js";
import { reedUser } from "./userS.js";

async function creatrEventS(event) {
  // ● Verify the user exists + correct password
  // ● Load events.json
  // ● Create a new event object
  // ● Save the event to the file. Make sure to comply with the way the
  // event is structured, as described above. Don’t overwrite - append.
  // ● Return a success message

  const events = await reed_file("data/events.json");

  const userExist = await reedUser(event.username);
  if (!userExist) {
    throw { msg: "user most exist", status: 401 };
  }
  events.push({
    eventName: event.eventName,
    ticketsForSale: event.ticketsForSale,
    username: event.username,
    password: event.password,
  });
  write_file(events, "data/events.json");
  console.log("event added to events", event);

  return {
"message": "Event created successfully"
}

}

export { creatrEventS };
