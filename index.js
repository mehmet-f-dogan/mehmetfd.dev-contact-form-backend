let PORT = -1;

process.argv.forEach(function (val, index, _) {
  if (index == 2) {
    PORT = Number(val);
  }
});

if (PORT < 1) {
  throw new Error("Invalid port");
}

const express = require("express");
const app = express();
app.use(express.json());

app.post("/", (request, response) => {
  const fs = require("fs");
  let body = request.json({ requestBody: req.body });
  let stringToAppend = "===========================";
  stringToAppend += body.name + "\n";
  stringToAppend += body.email + "\n";
  stringToAppend += body.subject + "\n";
  stringToAppend += body.message + "\n";
  stringToAppend += "===========================";
  fs.appendFileSync("contact.txt", stringToAppend);
  fs.close();
  response.status(200);
});

app.listen(PORT);
