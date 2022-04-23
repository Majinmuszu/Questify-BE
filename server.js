const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();
require("./config/config-passport");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// parse application/json
app.use(express.json());

app.use(logger(formatsLogger));

// cors

app.use(cors());
app.use(express.static("public"));
const routerApi = require("./api");
app.use("/api", routerApi);

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/cards or /api/users",
    data: "Not found",
  });
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
const urlDb = process.env.DB_HOST;

const connection = mongoose.connect(urlDb).then(() => {
  console.log("Database connection successful");
});

// connectDB();
connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
