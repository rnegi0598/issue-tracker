const getProjects = (req, res) => {
  const projects = [
    {
      projectId: 1,
      title: "sample title",
      author: "random ",
      description:
        "this is a sample description,this is a sample description,this is a sample description,this is a sample description,this is a sample description,this is a sample description,this is a sample description,this is a sample description,this is a sample description",
      issues: [],
    },
    {
      projectId: 2,
      title: "sample title2",
      author: "random 2",
      description: "this is a sample description2",
      issues: [],
    },
    {
      projectId: 3,
      title: "sample title 3",
      author: "random 3",
      description: "this is a sample description3",
      issues: [],
    },
    {
      projectId: 4,
      title: "sample title4",
      author: "random 4",
      description: "this is a sample description4",
      issues: [],
    },
  ];
  res.render("pages/home", { projects });
};

const getProject = (req, res) => {
  res.render("pages/project");
};

const getCreateProject = (req, res) => {
  res.render("pages/create-project");
};

const postCreateProject = (req, res) => {
  res.send("pages/project created");
};

const getCreateIssue = (req, res) => {
  console.log("create issue controller ");
  res.render("pages/create-issue");
};

const postCreateIssue = (req, res) => {
  res.send("issue created");
};

module.exports = {
  getProjects,
  getProject,
  getCreateProject,
  postCreateProject,
  getCreateIssue,
  postCreateIssue,
};
