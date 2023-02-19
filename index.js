const PORT = process.env.PORT || -1;

if (PORT < 1) {
  throw new Error("Invalid port");
}

const express = require("express");
const app = express();
app.use(express.json());

app.post("/contact", (request, response) => {
  const fs = require("fs");
  let body = request.body;
  let stringToAppend = "===========================\n";
  stringToAppend += body.name + "\n";
  stringToAppend += body.email + "\n";
  stringToAppend += body.subject + "\n";
  stringToAppend += body.message + "\n";
  stringToAppend += "===========================\n";
  fs.appendFileSync("contact.txt", stringToAppend);
  response.status(200);
  response.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
