var cat_hand;
var water;
var angle = 90;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	cat_hand = new MovingCatHand();
	water = new WavingWater();
}

function draw() {
	background(255); // redraw background every frame
	noStroke(); // no outline on the objects
	//console.log(scaleCatArm(angle));
	cat_hand.display();
	water.display();
}

function MovingCatHand(){
	this.display = function(){
		//draw orange color on the quadrilateral cat arm
		fill('orange');
		quad((mouseX - 125) - (scaleCatArm(angle)/3.5), 0, mouseX - (scaleCatArm(angle)/3.5), 0, mouseX + 50, window.innerHeight/5, mouseX - 50, window.innerHeight/5); // cat arm is 125 px thick
		//draw off-white color on the elliptical cat paw
		fill(220);
		ellipse(mouseX, window.innerHeight/5, 100, 100);
	}
}

function scaleCatArm(angle_in_degrees){
	var angle_constant = angle_in_degrees * Math.PI/180; // convert to radians
	var scaledAngle;
	if (mouseX > window.innerWidth*0.8){
		scaledAngle = angle_constant * ((window.innerWidth - window.innerWidth*0.8)/1000);
	}
	else scaledAngle = angle_constant * ((window.innerWidth - mouseX)/1000); // create the scaled angle
	return ((window.innerHeight/5) / Math.tan(scaledAngle)); // return distance to modify the top points
}

function WavingWater(){
	this.display = function(){
		fill(138, 182, 252);
		beginShape();
		for (var i = 0; i <= window.innerWidth; i = i + 50){
			var r = random(-10, 10);
			curveVertex(i, (window.innerHeight / 2) + r);
		}
		vertex(window.innerWidth, window.innerHeight);
		vertex(0, window.innerHeight);
		endShape(CLOSE);
	}
}
// ToDo: make an array of the curvedVertexes, all of which should make a flat line
// traverse the array and variate each vertex by -10 to 10 very slowly
