const express = require("express");
const moment = require("moment-timezone");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = moment().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss");
  const message = `get request ${date}`;
  console.log(message);
  res.send(message);
});
app.post("/", (req, res) => {
  const date = moment().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss");
  const message = `post request ${date}`;
  console.log(message);
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
