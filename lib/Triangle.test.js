const Triangle = require('./Triangle');

describe('Triangle', () => {
    describe('shape', () => {
        it('should take colors and apply them for logo', () => {
            const shape = new Triangle();
            const color = "blue";
            const characters = "GTD";
            const textColor = "black";
            shape.setColor(color);
            shape.setCharacters(characters);
            shape.setTextColor(textColor);

            expect(shape.render()).toEqual(`<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${color}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text></svg>`);
        });
    });
});