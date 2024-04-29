const Circle = require('./Circle');

describe('Circle', () => {
    describe('shape', () => {
        it('should take colors and apply them for logo', () => {
            const shape = new Circle();
            const color = "blue";
            const characters = "GTD";
            const textColor = "black";
            shape.setColor(color);
            shape.setCharacters(characters);
            shape.setTextColor(textColor);

            expect(shape.render()).toEqual(`<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${color}" />
        <text x="50" y="60" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text></svg>`);
        });
    });
});