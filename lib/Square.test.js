const Square = require('./Square');

describe('Square', () => {
    describe('shape', () => {
        it('should take colors and apply them for logo', () => {
            const shape = new Square();
            const color = "blue";
            const characters = "GTD";
            const textColor = "black";
            shape.setColor(color);
            shape.setCharacters(characters);
            shape.setTextColor(textColor);

            expect(shape.render()).toEqual(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="50" y="50" fill="${color}" />
        <text x="150" y="150" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text></svg>`);
        });
    });
});