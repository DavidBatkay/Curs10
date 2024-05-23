const buttonStart = new Button(200, 300, 40, 20, "Start", "green")
const buttonStop = new Button(200, 300, 40, 20, "Stop", "red")

function setup() {
  createCanvas(500, 500);
}

function draw() {
  buttonStart.draw();
  buttonStop.draw();
}
function mouseClicked() {
  buttonStart.click();
  buttonStop.click();

}