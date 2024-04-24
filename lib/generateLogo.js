const Triangle = require ('./Triangle')
const Circle = require ('./Circle')
const Square = require ('./Square')

function generateLogo (data) {
    let shape = undefined;
    if (data.shape === "Triangle") {
        shape = new Triangle(data.shapeColor, data.textColor, data.characters);
    } else if (data.shape === "Circle"){
        shape = new Circle(data.shapeColor, data.textColor, data.characters);
    } else {
        shape = new Square(data.shapeColor, data.textColor, data.characters);
    }
    return shape.render();
}

module.exports = generateLogo;