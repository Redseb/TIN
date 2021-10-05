const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5500;
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.post("/arithmetic", (req, res) => {
  const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const op = req.body.op;
  let result;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid op code. valid codes are +,-,*, or /";
      res.statusCode = 400;
  }
  if (isNaN(a) || isNaN(b)) {
    result = "Invalid parameters a or b";
    res.statusCode = 400;
  }
  res.send({ headers: HEADERS, result: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
