const Project=require('../models/project');
const Issue =require('../models/issue');

const getProjects = async (req, res) => {
  const projects=await Project.find();
  res.render("pages/home", { projects });
};

const getProject = async(req, res) => {
  const {projectId}=req.params;
  const project= await Project.findById(projectId).populate('issues').exec();
  res.render("pages/project",{project});
};

const getCreateProject = (req, res) => {
  res.render("pages/create-project");
};

const postCreateProject = async(req, res) => {
  const {title,author,description}=req.body;
  const project=new Project({
    title,
    author,
    description,
    issues:[],
  })
  await project.save();

  res.redirect('/');
};

const getCreateIssue = (req, res) => {
  const {projectId}=req.params;
  res.render("pages/create-issue",{projectId});
};

const postCreateIssue = async(req, res) => {
  const {title,author,description,labels}=req.body;
  const {projectId}=req.params;
  const labelArr=labels.split(',');
  const issue=new Issue({
    title,
    author,
    description,
    labels:labelArr,
  })
  const savedIssue=await issue.save();
  const project=await Project.findById(projectId);
  project.issues.push(savedIssue);
  await project.save();

  
  res.redirect(`/${projectId}`)
};

module.exports = {
  getProjects,
  getProject,
  getCreateProject,
  postCreateProject,
  getCreateIssue,
  postCreateIssue,
};
