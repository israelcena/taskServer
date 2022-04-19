const mongoose = require("mongoose");

const connectDB = (url) => {
	return mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("MongoDB connected");
		})
		.catch((err) => {
			console.log(err);
			process.exit(1);
		});
};

module.exports = connectDB;
