const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
	const allTasks = await Task.find({});
	res.status(200).json({
		status: "Success",
		data: {
			task: allTasks,
			tasksLength: allTasks.length,
		},
	});
});

const getOneTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findById(req.params.id);
	if (!task)
		return next(
			createCustomError(`The task with id ${req.params.id} does not exist`, 404)
		);
	res.status(200).json({ task });
});

const includeTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	if (!task)
		return next(
			createCustomError(`The task with id ${req.params.id} does not exist`, 404)
		);
	res.status(200).json({ message: "Task deleted" });
});

module.exports = {
	getAllTasks,
	getOneTask,
	includeTask,
	deleteTask,
	updateTask,
};
