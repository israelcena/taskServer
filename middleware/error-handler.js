const errorHandlerMiddleware = (err, req, res, next) => {
	console.error(err);
	return res.status(err.statusCode).json({
		message: err.message,
	});
};

module.exports = errorHandlerMiddleware;
