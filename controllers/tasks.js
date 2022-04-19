const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
	const allTasks = await Task.find({});
	res.status(200).json({ allTasks });
});

const getOneTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findById(req.params.id);
	console.log(task);
	if (!task) return next.status(404).json({ msg: "Task not found" });
	res.status(200).json({ task });
});

const includeTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

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
