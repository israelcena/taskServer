const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
	const allTasks = await Task.find({});
	res.status(200).json({ allTasks });
};

const getOneTask = (req, res, next) => {
	res.json({ id: req.params.id });
};

const includeTask = async (req, res, next) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
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
