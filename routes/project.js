const express = require("express");
const {
  getProjects,
  getProject,
  getCreateProject,
  postCreateProject,
  getCreateIssue,
  postCreateIssue,
} = require("../controllers/project");

const router = express.Router();

router.get("/", getProjects);

router.get("/:projectId", getProject);

router.get("/create/project", getCreateProject);
router.post("/create/project", postCreateProject);

router.get("/create/issue", getCreateIssue);
router.post("/create/issue", postCreateIssue);


module.exports=router;