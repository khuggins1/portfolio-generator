const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const fs = require('fs');
// const generatePage = require('./page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptProject = portfolioData => {
  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
} .then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
});
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
