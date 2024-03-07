const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
require("./DB/mongoose");
const routes = require("./Routes/index");

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`something ${port}`);
});

app.use("/", routes);
