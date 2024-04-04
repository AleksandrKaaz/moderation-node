const express = require("express");
const cors = require("cors");
const { announcements1 } = require("./mock1");
const { announcements2 } = require("./mock2");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8082;

let count = 0;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/announcements", (request, response) => {
  count++;
  if (count % 2 === 0) {
    response.send(announcements1);
  } else {
    response.send(announcements2);
  }
});

app.post("/announcements", (request, response) => {
  response.send("ok");
});
