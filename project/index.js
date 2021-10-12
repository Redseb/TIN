const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.use(bodyParser.json());

//Get playable game
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/flappy.html"));
});

//Get highscores
app.get("/highscore", (req, res) => {
  res.send();
});

//Add new highscore
app.post("/highscore", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
