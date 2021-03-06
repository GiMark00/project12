const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const PostUsers = require('./routes/users');
const PostCards = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(PostUsers);

app.use(PostCards);

app.use((req, res) => {
  res.status(404).json(
    { message: 'Запрашиваемый ресурс не найден' },
  );
});

app.listen(PORT);
