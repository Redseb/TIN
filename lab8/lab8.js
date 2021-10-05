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

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "/form.html"));
});

app.post("/formdata", (req, res) => {
  res.send(
    `<html>
        <head>
            <title>lab8 formdata</title>
        </head>
        <body>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>${req.body.fname}</td>
                    <td>${req.body.lname}</td>
                    <td>${req.body.age}</td>
                </tr>
            </table>
        </body>
    </html>`
  );
});

app.post("/jsondata", (req, res) => {
  res.send(
    `<html>
            <head>
                <title>lab8 jsondata</title>
            </head>
            <body>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>${req.body.fname}</td>
                        <td>${req.body.lname}</td>
                        <td>${req.body.age}</td>
                    </tr>
                </table>
            </body>
        </html>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
