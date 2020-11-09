const post_cards = require("express").Router();
const fs = require("fs").promises;


const cards = (req, res) => {
  fs.readFile("./data/cards.json", "utf-8")
  .then(data => {
    data = JSON.parse(data);
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(404).json({ message: `Ошибка при чтении файла: ${err}` });
  });

};


post_cards.get("/cards", cards);

module.exports = post_cards; // экспортировали роутер