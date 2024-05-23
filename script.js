const buttonStart = new Button(200, 300, 80, 40, "Start", "green")
const buttonStop = new Button(400, 300, 80, 40, "Stop", "red")
const letter = new Letter("A", 200, "red", 100, 300);

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