const express = require("express");
const { check, validationResult } = require("express-validator");
const app = express();
const port = 8080;
var cors = require("cors");
app.use(cors());

function reverseString(str) {
  return str.split("").reverse().join("");
}

app.get("/iecho", [check("text").isLength({ min: 1 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: "no text" });
    return;
  } else {
    const value = req.query.text;
    const reverseText = reverseString(value);
    res.status(200).json({ text: reverseText, palindrome: reverseText === value });
  }
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

module.exports = app;
