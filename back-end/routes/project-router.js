const express = require("express");
const verifyToken = require("../db/verifyToken");
const ProjectController = require("../controllers/project-controller");

const router = express.Router();
router.get("/project/:id", verifyToken, ProjectController.getProject);
router.post("/project", verifyToken, ProjectController.createProject);
router.put("/project/task", verifyToken, ProjectController.addTask);
router.delete("/project/task", verifyToken, ProjectController.deleteTask);
router.put("/project/task", verifyToken, ProjectController.editTask);
router.delete("/project", verifyToken, ProjectController.deleteProject);
router.get("/projects/:id", verifyToken, ProjectController.getProjects);
router.get("/projects/recent/:id", verifyToken, ProjectController.getRecentProjects)

module.exports = router;