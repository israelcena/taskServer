// imports
const createError = require("http-errors");
const express = require("express");
// const path = require("path"); // not used
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const healthCheck = require("./routes/health-check");
const tasksRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

require("dotenv").config();
const app = express();

// express middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// db connection
connectDB(process.env.MONGODB_URI);

// Use the routes
app.use("/healthCheck", healthCheck);
app.use("/tasks", tasksRouter);

// catch 404 and forward to error handler
app.use(notFound);
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use(errorHandlerMiddleware);

app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
