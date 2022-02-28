require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const userRouter = require("./routes/user.routes");
const workerRouter = require("./routes/worker.routes");
const projectRouter = require("./routes/project.routes");
const contractRouter = require("./routes/contract.routes");
const specializationRouter = require("./routes/specialization.routes");
const accountRoutes = require("./routes/account.routes");
const costRouter = require("./routes/cost.routes");

app.use(express.json());
app.use("/users", userRouter);
app.use("/worker", workerRouter);
app.use("/project", projectRouter);
app.use("/accounts", accountRoutes);
app.use("/contract", contractRouter);
app.use("/specialization", specializationRouter);
app.use("/cost", costRouter);




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
