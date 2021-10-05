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

app.post("/jsondata", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
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
  res.send({ result: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
