import { reed_file, write_file } from "../fileHandle.js";

async function creatrUserS(newUser) {
  //     Load users.json
  // ● Check that the username does not already exist
  // ● Save the new user to the file - username + password. Make sure
  // to comply with the way the user is structured, as described above.
  // ● Return a success message

  const users = await reed_file("data/users.json");
  // console.log(users);

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

async function reedUser(username) {
  const users = await reed_file("data/users.json");
  const isExist = users.find((user) => user.username === username);
  return isExist ? users : undefined;
}

export { creatrUserS, reedUser };
