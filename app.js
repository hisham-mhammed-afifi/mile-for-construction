require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const app = express();
app.use(errorHandler);
app.get("/", (req, res) => {
  // res.send("welcome home");
});

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening on port ${port} ...`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

startServer();
