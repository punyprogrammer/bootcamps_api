const express = require("express");
const dotenv = require("dotenv");
const loggerMiddleware = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();
//import route files
const bootcampRoutes = require("./routes/bootcamp");
const app = express();
//body parser
app.use(express.json());
//Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount the routes
app.use("/api/v1/bootcamps", bootcampRoutes);

//use the errorHandler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} node on port ${PORT}`
  )
);
