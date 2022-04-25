const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
const form = require("./routes/formRoute");

app.use("/api/v1", form);
module.exports = app;
