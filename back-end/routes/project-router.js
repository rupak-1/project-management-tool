const express = require("express");
const verifyToken = require("../db/verifyToken");
const ProjectController = require("../controllers/project-controller");

const router = express.Router();
router.get("/project/:id", verifyToken, ProjectController.getProject);
router.post("/project", verifyToken, ProjectController.createProject);
router.put("/project/task", verifyToken, ProjectController.addTask);
router.delete("/project/task", verifyToken, ProjectController.deleteTask);
router.delete("/project/:id", verifyToken, ProjectController.deleteProject);
router.get("/projects", verifyToken, ProjectController.getProjects);
router.get("/projects/recent", verifyToken, ProjectController.getRecentProjects)

module.exports = router;