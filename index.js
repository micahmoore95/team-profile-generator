const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
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
        {
            type: 'input',
                name: 'managerId',
                message: 'What is their employee ID? (Required)',
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('Please enter their employee ID.');
                    }
                }
            },
            {
                type: 'input',
                    name: 'office',
                    message: 'What is their office number? (Required)',
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log('Please enter their office number.');
                        }
                    }
                },
                {
                    type: 'input',
                        name: 'managerEmail',
                        message: 'What is their email address? (Required)',
                        validate: managerEmailInput => {
                            if (managerEmailInput) {
                                return true;
                            } else {
                                console.log('Please enter their email address.');
                            }
                        }
                    },
                    {
                        type: 'confirm',
                            name: 'add',
                            message: 'Would you like to add another employee? (Required)',
                            default: false
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
    const markdown = generateHTML(feedback);
    writeToFile(markdown);
  };

init();