const post_cards = require("./routes/cards");
const post_users = require("./routes/users");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const { PORT = 3000 } = process.env;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(post_users);
app.use(post_cards);

// app.use("*", (req, res) => {
//   res.status(404).send(
//     { message: "Ресурс не найден" },
//   );
// });

app.listen(PORT, () => app.use(express.static(path.join(__dirname, "public"))));