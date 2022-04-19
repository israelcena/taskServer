const notFound = (req, res, next) => {
	const error = new Error(`The Route ${req.originalUrl} Not Found!`);
	res.status(404).send(error.message);
	next(error);
};

module.exports = notFound;
