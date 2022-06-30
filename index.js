const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Manager = require('./lib/Manager');

const managerQuestions = () => {
    return inquirer.prompt ([
        {
        type: 'input',
            name: 'manager',
            message: 'What is your Manager name? (Required)',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please enter the Manager name.');
                }
            }
        },
    ])
}

const writeToFile = data => {
    fs.writeFile('./dist/index.html', html, error => {
      if (error) {
        console.log(error);
        return; 
      } else {
        console.log("HTML file has been generated successfully")
      }
    })
  };
  
  
  async function init() {
    const feedback = await managerQuestions();
    const markdown = generateMarkdown(feedback);
    writeToFile(markdown);
  };

init();