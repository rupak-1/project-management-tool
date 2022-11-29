const Project = require("../db/models/project-model");

const createProject = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a project",
    });
  }

  try {
    const project = new Project(body);
    await project.save();
    return res.status(201).json({
      success: true,
      data: project,
      message: "Project created!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.errmsg,
      message: "Project not created!",
    });
  }
};

const addTask = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    // await Project.updateOne({_id: body._id}, {$push: body.task});
    const project = await Project.findOne({_id: body._id});
    project.tasks.push(body.task);
    project.save();
    console.log(project);
    return res.status(200).json({
      success: true,
      message: "Project updated!",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
      message: "Project not updated!",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    // const project = await Project.findOne({_id: req.body._id});
    // console.log("-----------------------------------------p")
    // console.log(project)
    // const filteredTasks = project.tasks.filter((task) => task._id !== req.body.task_id)
    // const newProject = {...project, tasks: filteredTasks};
    // newProject.save()
    // console.log("-----------------------------------------a")
    // console.log(await Project.findOne({ _id: req.body._id}))
    console.log("yes")
    const project = await Project.updateOne({_id: req.body._id}, {$pull: {tasks: {_id: req.body.task_id}}})

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, id: project._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }

}

const editTask = async (req, res) => {
  try {
    console.log("In");
    const project = await Project.findOne({_id: req.body._id});
    project.tasks.where({_id: req.body.task_id}).status = true;
    console.log(project);

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, id: project._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }

}


const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id});

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, id: project._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};


const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({creator_id: req.params.id});
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({_id:req.params.id});
    console.log(project);
    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getRecentProjects = async (req, res) => {
  try {
    const projects = await Project.find({creator_id: req.params.id}).sort({updatedAt: -1}).limit(4);
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  createProject,
  addTask,
  editTask,
  deleteTask,
  deleteProject,
  getProjects,
  getProject,
  getRecentProjects
};