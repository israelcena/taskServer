const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
	const allTasks = await Task.find({});
	res.status(200).json({ allTasks });
});

const getOneTask = async (req, res, next) => {
	const task = await Task.findById(req.params.id);
	console.log(task);
	if (!task) return next.status(404).json({ msg: "Task not found" });
	res.status(200).json({ task });
};

const includeTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const updateTask = async (req, res, next) => {
	const { id } = req.params;
	const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
	res.status(201).json({ task });
};

const deleteTask = async (req, res) => {
	const { id } = req.params;
	const task = await Task.findByIdAndDelete(id);
	if (!task) return res.status(404).json({ msg: `Task with id ${id} not found` });
	res.status(200).json({ msg: "Task deleted" });
};

module.exports = {
	getAllTasks,
	getOneTask,
	includeTask,
	deleteTask,
	updateTask,
};
