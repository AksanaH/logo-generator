const Shape = require('./shapes');

class Circle extends Shape {
    render() {
        return `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${this.color}" />
        <text x="50" y="60" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.characters}</text></svg>`    
    }
}

module.exports = Circle;