const inquirer = require('inquirer');

const Shape = require('./lib/shapes');

const generateLogo = require('./lib/generateLogo');
const fs = require('fs');
const path = require('path');

const fileName = 'logo.svg';

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What text shoud be go inside of the svg file (enter up to three characters)?',
            name: 'characters',
            validate: function (answer) {
                if (answer.length > 3) {
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What text color shoud be go inside of the svg file (enter a color keyword or a hexadecimal number)?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like for your logo?',
            name: 'shape',
            choices:['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'What color of shape would you like (enter a color keyword or a hexadecimal number)?',
            name: 'shapeColor',
        
        },
    ]
)
.then((answers) => {
    console.log(answers);
    writeToFile(fileName, answers);

})


function writeToFile(fileName, answers) {
    console.log(answers);
    let content = generateLogo(answers);
    console.log(content);

    fs.writeFile(fileName, content, function(error){});
        console.log("Generating logo.svg");
    
}


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then((inquirerAnswers) => {
//            const fileName = 'logo.svg';
//            writeToFile(fileName, inquirerAnswers);
//         })
// }
// // Function call to initialize appscd
// init();