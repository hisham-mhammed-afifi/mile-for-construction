require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const workerRouter = require("./routes/worker.routes");
const projectRouter = require("./routes/project.routes");

app.use(express.json());
app.use("/worker", workerRouter);
app.use("/project", projectRouter);

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
