const express = require("express");
const { check, validationResult } = require("express-validator");
const app = express();
const port = 8080;

app.get("/iecho", [check("text").isLength({ min: 1 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: "oh no" });
    return;
  } else {
    res.status(200).json({ text: "no text" });
  }
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

module.exports = app;
