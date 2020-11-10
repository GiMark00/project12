const PostCards = require("express").Router();
const fs = require("fs").promises;

const cards = (req, res) => {
  fs.readFile("./data/cards.json", "utf-8")
    .then((data) => {
      let card = { ...data };
      card = JSON.parse(data);
      res.status(200).json(card);
    })
    .catch((err) => {
      res.status(500).json({ message: `Ошибка при чтении файла: ${err}` });
    });
};

PostCards.get("/cards", cards);

module.exports = PostCards; // экспортировали роутер
