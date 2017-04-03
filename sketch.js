var cat_hand;
var angle = 75;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	cat_hand = new MovingCatHand();
}

function draw() {
	background(255); // redraw background every frame
	noStroke(); // no outline on the objects
	console.log(scaleCatArm(angle));
	cat_hand.display();
}

function MovingCatHand(){
	this.display = function(){
		//draw orange color on the quadrilateral cat arm
		fill('orange');
		quad((mouseX - 125) - scaleCatArm(angle), 0, mouseX - scaleCatArm(angle), 0, mouseX + 50, window.innerHeight/5, mouseX - 50, window.innerHeight/5); // cat arm is 125 px thick
		//draw off-white color on the elliptical cat paw
		fill(220);
		ellipse(mouseX, window.innerHeight/5, 100, 100);
	}
}

function scaleCatArm(angle_constant){
	var scaledAngle = angle_constant * ((window.innerWidth - mouseX)/1000);
	return (window.innerHeight / Math.tan(scaledAngle));
}
