class Button {
    #color;
    #x;
    #y;
    #w;
    #h;
    #text;

    constructor(x, y, w, h, text, color) {
        this.#x = x;
        this.#y = y;
        this.#w = w;
        this.#h = h;
        this.#text = text;
        this.#color = color;
    }
    draw() {
        fill(this.#color);
        rect(this.#x, this.#y, this.#w, this.#h);
        fill("black")
        textSize(30);
        text(this.#text, this.#x + 8, this.#y + 35);
    }
    click(letter) {
        if (mouseX >= this.#x &&
            mouseX <= this.#x + this.#w &&
            mouseY >= this.#y &&
            mouseY <= this.#y + this.#h) {
            // console.log("button was clicked", this.#text);
            letter.nextLetter();
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

    startCounting() {
        setInterval(this.nextLetter, this.#speed, this)
    }

    nextLetter(letter) {
        const finalLetter = "z".charCodeAt();
        const letterCode = letter.charCodeAt() + 1;
        if (finalLetter = letterCode) { letter = "a" }
        letter.#letter = String.fromCharCode(letterCode);
    }
}