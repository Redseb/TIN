const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const csv = require("csv-parser");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "highscores.csv",
  header: [
    { id: "username", title: "Username" },
    { id: "highscore", title: "Highscore" },
  ],
  append: true,
});
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
  let highscores = [];
  fs.createReadStream("highscores.csv")
    .pipe(csv())
    .on("data", (row) => {
      highscores.push(row);
    })
    .on("end", () => {
      let scores_formatted = "";

      highscores.sort((a, b) => {
        if (parseInt(a.Highscore) < parseInt(b.Highscore)) return 1;
        if (parseInt(a.Highscore) > parseInt(b.Highscore)) return -1;
        return 0;
      });
      highscores = highscores.filter(
        //es6 filtering magic
        (v, i, a) => a.findIndex((t) => t.Username === v.Username) === i
      );
      highscores.forEach((highscore) => {
        scores_formatted += `<tr><td>${highscore.Username}</td><td>${highscore.Highscore}</td></tr>`;
      });
      //`<tr><td>${row.Username}</td><td>${row.Highscore}</td></tr>`
      res.send(
        `<html>
            <head>
                <title>Retro Bird | Highsores</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="flappy.css" />
            </head>
            <body>
            <a id="backButton" href="http://localhost:3000/">Back</a>
                <h1>Highscores</h1>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Highscore</th>
                    </tr>
                    ${scores_formatted}
                </table>
            </body>
        </html>`
      );
    });
});

//Add new highscore
app.post("/highscore", (req, res) => {
  csvWriter
    .writeRecords([
      {
        username: req.body.username,
        highscore: req.body.highscore,
      },
    ])
    .then(() => res.sendStatus(200));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
