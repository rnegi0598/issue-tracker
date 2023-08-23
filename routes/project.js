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

router.get("/project", getCreateProject);
router.post("/project", postCreateProject);

router.get("/issue", getCreateIssue);
router.post("/issue", postCreateIssue);
