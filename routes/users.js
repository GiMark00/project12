const post_users = require("express").Router();
const fs = require("fs").promises;


const single_user = (req, res) => {
  fs.readFile("./data/users.json", "utf-8")
  .then((data) => {
    const users = JSON.parse(data);
    const userId = users.find((item) => item._id === req.params.id);

    if (!userId) {
      res.status(404).send({ message: "Нет пользователя с таким id" });
      return;
    }

    res.status(200).json(userId);
  })
  .catch ((err) => {
    res.status(500).json({ message: `Ошибка при чтении файла: ${err}` });
  });
};


const all_users = (req, res) => {
  fs.readFile("./data/users.json", "utf-8")
  .then(data => {
    data = JSON.parse(data);
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(404).json({ message: `Ошибка при чтении файла: ${err}` });
  });

};

post_users.get("/users/:id", single_user);
post_users.get("/users", all_users);

module.exports = post_users;