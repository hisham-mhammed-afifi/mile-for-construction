require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

// for image upload
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "heroku-app",
  api_key: "435898959395763",
  api_secret: "V6LvRNVr_9tGKefPsbLA6zIAUlI",
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const userRouter = require("./routes/user.routes");
const workerRouter = require("./routes/worker.routes");
const projectRouter = require("./routes/project.routes");
const contractRouter = require("./routes/contract.routes");
const specializationRouter = require("./routes/specialization.routes");
const accountRoutes = require("./routes/account.routes");
const costRouter = require("./routes/cost.routes");
const rateLimit = require("express-rate-limit");
const { StatusCodes } = require("http-status-codes");

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requist from this IP, Please try again in an hour!",
});

app.use(cors());
app.use(express.json());
app.use(mongoSanitize());
app.use(limiter);
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "This mile for construction APIs" });
});
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
const port = process.env.PORT || 8000;
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
