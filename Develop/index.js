// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown.js");
const { error } = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the name of the application?",
        name:"title",
    },
    {
        type:"input",
        message:"What is the description of your application?",
        name:"description",
    },
    {
        type:"input",
        message:"How to install your application?",
        name:"installation",
    },
    {
        type:"input",
        message:"How users start the application",
        name:"usage",
    },
    {
        type:"list",
        message:"What License does your application use?",
        name:"license",
        choices:["MIT", "Apache", "GNU", "None"],
    },
    {
        type:"input",
        message:"How do users contrabute to your application?",
        name:"contrabution",
    },
    {
        type:"input",
        message:"How do you run the applications test?",
        name:"test",
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"github",
    },
    {
        type:"input",
        message:"What is your email?",
        name:"email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(res =>{
        const markdown = generateMarkdown(res)
        fs.writeFile("./utils/readme.md", markdown, (error, data)=> {
            if (error) {
                console.log(error)
            }
            console.log("readme has been generated")
        })
    })
}

// Function call to initialize app
init();
