const buttonStart = new Button(200, 300, 40, 20, "Start", "green")
const buttonStop = new Button(200, 300, 40, 20, "Stop", "red")
const letter = new Letter("A", 2, "red", 100, 300);

function setup() {
  createCanvas(500, 500);
}

function draw() {
  clear();
  buttonStart.draw();
  buttonStop.draw();
  letter.draw();

}
function mouseClicked() {
  buttonStart.click(letter);
  buttonStop.click(letter);

}