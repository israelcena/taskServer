const getAllTasks = (req, res, next) => {
	res.send("All Tasks!");
};

const getOneTask = (req, res, next) => {
	res.send("One Task!");
};

const includeTask = (req, res, next) => {
	res.send("Include Task!");
};

const deleteTask = (req, res, next) => {
	res.send("Delete Task!");
};

const updateTask = (req, res, next) => {
	res.send("Update Task!");
};


module.exports = {
	getAllTasks,
	getOneTask,
	includeTask,
	deleteTask,
	updateTask
};
