const express = require("express");
const router = express.Router();

const {
	getAllTasks,
	getOneTask,
	includeTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(includeTask);
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
