const { CustomApiError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
	console.error(err);

	if (err instanceof CustomApiError)
		return res.status(err.statusCode).json({
			message: err.message,
		});

	if (err.name === "ValidationError")
		return res.status(403).json({ message: err.message });

	return res.status(500).json({
		message: err.message,
	});
};

module.exports = errorHandlerMiddleware;
