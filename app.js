require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const userRouter = require("./routes/user.routes");
const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  // res.send("welcome home");
});
// must be after all routes and require express-async-errors package
app.use(errorHandler);
///////////////////////////
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
