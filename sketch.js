function setup() {
	createCanvas(1280, 860);
	background(0, 300, 300, 100);
}

function draw() {
	ellipse(50, 50, 80, 80);
	if (mouseIsPressed) {
		fill(100, 200, 100, 100);
	} else {
		fill(0, 100, 0, 50);
	}
	ellipse(mouseX, mouseY, 80, 80);
}
