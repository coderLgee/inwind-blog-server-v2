const db = require("../db/database");

async function getUserService() {
  const data = await db.execute("SELECT * FROM user");
  let [res] = data;
  return res;
}

async function getUserByNameService(username) {
  const data = await db.execute("SELECT * FROM user WHERE username = ?", [
    username,
  ]);
  return data[0];
}

async function createUserService(ctx) {
  const { username, password } = ctx.request.body;
  const data = await db.execute(
    "INSERT INTO user (username,password) VALUES (?,?)",
    [username, password]
  );
  return "εε»Ίζε";
}



module.exports = {
  getUserService,
  createUserService,
  getUserByNameService,
};
