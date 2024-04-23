const inquirer = require('inquirer');

const Shape = require('./lib/shapes');

const fs = require('fs');
const path = require('path');

function writeToFile(fileName, answers) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), answers);
}

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
    return writeToFile("logo.svg", {answers});
});

