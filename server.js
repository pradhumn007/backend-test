require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection = require("./utils/db");

//middleware
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/auth.route"));
app.use("/dashboard", require("./routes/dashboard.route"));

const port = process.env.port || 8081;

app.listen(port, () => console.log(`listening on port ${port}...`));
dbConnection
  .sync({
    // force: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
