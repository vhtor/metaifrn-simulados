const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require("./data/users");

server.get("/api/users", (req, res, next) => {
  res.status(200).send(userData.getUsers);
});

server.get("/api/users/:id", (req, res, next) => {
  const id = req.params.id;
  const user = userData.getUsers.find(user => user.id == id);
  res.status(200).send(user);
});

server.listen(3000, () => {
  console.log("JSON server listening on port 3000");
});
