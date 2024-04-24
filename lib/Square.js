const Shape = require('./shapes');

class Square extends Shape {
    render() {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="50" y="50" fill="${this.color}" />
        <text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.characters}</text></svg>`    
    }
}

module.exports = Square;