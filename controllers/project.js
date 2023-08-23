const getProjects = (req, res) => {
  res.render('pages/home');

};

const getProject = (req, res) => {
  res.render('pages/project');
};

const getCreateProject = (req, res) => {
  res.render('pages/create-project');

};

const postCreateProject = (req, res) => {
  res.send('pages/project created')

};

const getCreateIssue = (req, res) => {
  console.log('create issue controller ');
  res.render('pages/create-issue');

};

const postCreateIssue = (req, res) => {
  res.send('issue created');

};

module.exports = {
  getProjects,
  getProject,
  getCreateProject,
  postCreateProject,
  getCreateIssue,
  postCreateIssue,
};
