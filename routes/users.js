const PostUsers = require("express").Router();
const fs = require("fs").promises;

const SingleUser = (req, res) => {
  fs.readFile("./data/users.json", "utf-8")
    .then((data) => {
      const users = JSON.parse(data);
      const userId = users.find((item) => item._id === req.params.id);

      if (!userId) {
        res.status(500).send({ message: "Нет пользователя с таким id" });
        return;
      }

      res.status(200).json(userId);
    })
    .catch((err) => {
      res.status(500).json({ message: `Ошибка при чтении файла: ${err}` });
    });
};

const AllUsers = (req, res) => {
  fs.readFile("./data/users.json", "utf-8")
    .then((data) => {
      let users = { ...data };
      users = JSON.parse(data);
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: `Ошибка при чтении файла: ${err}` });
    });
};

PostUsers.get("/users/:id", SingleUser);
PostUsers.get("/users", AllUsers);

module.exports = PostUsers;
