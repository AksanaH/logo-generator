const Triangle = require ('./Triangle')

function generateLogo (data) {
    let shape = undefined;
    if (data.shape === "Triangle") {
        shape = new Triangle(data.shapeColor, data.textColor, data.characters);
    } else {
        shape = new Circle (data.shapeColor, data.textColor, data.characters);
    }
    return shape.render();
}

module.exports = generateLogo;