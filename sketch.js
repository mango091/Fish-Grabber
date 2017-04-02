var cat_hand;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	cat_hand = new MovingCatHand();
}

function draw() {
	background(220);
	noStroke();
	cat_hand.display();
}

function MovingCatHand(){
	this.display = function(){
		ellipse(mouseX, window.innerHeight/5, 100, 100);
		quad(0, 0, 200, 0, mouseX + 50, window.innerHeight/5, mouseX - 50, window.innerHeight/5);
	}
}
