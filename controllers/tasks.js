const getAllTasks = (req, res, next) => {
	res.send("All Tasks!");
};

const getOneTask = (req, res, next) => {
	res.json({id:req.params.id});
};

const includeTask = (req, res, next) => {
	res.json(req.body);
};

const updateTask = (req, res, next) => {
	res.send("Update Task!");
};

const deleteTask = (req, res, next) => {
	res.send("Delete Task!");
};

module.exports = {
	getAllTasks,
	getOneTask,
	includeTask,
	deleteTask,
	updateTask,
};
