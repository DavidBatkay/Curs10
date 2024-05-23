class Button {
    #color;
    #x;
    #y;
    #w;
    #h;
    #text;
    draw() {
        fill(this.#color);
        textSize(50);
        text(this.#text, this.#x);
    }
    click() {
        if (mouseX >= this.#x &&
            mouseX <= this.#x + this.#w &&
            mouseY >= this.#y &&
            mouseY <= this.#y + this.#h) {
            console.log("button was clicked", this.#text);
        }
    }
}

class Letter {
    #x;
    #y;
    #letter;
    #speed;
    #color;

    constructor(letter, speed, color, x, y) {
        this.#letter = letter;
        this.#speed = speed;
        this.#color = color;
        this.#x = x;
        this.#y = y;
    }

    draw() {
        fill(this.#color);
        textSize(50);
        text(this.#letter, this.#x, this.#y);
    }
}