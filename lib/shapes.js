class Shape {
    constructor(color, textColor, characters){
        this.color = color;
        this.characters = characters;
        this.textColor = textColor;
    }
    setColor(color){
        this.color = color;
    }
    setCharacters(characters){
        this.characters = characters;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}

module.exports = Shape;