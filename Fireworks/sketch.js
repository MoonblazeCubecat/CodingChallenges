

var f = [];
var p = [];

var grav;

function setup() {
	createCanvas(1350, 620);
	stroke(255);
	strokeWeight(4);
	f.push(new firework(width/2, height/2));
	grav = createVector(0, 0.2);

}

function draw() {
	colorMode(RGB);
	background(0, 25);
	colorMode(HSB);
	for (var i = 0; i < f.length; i++) {
		f[i].update();
		f[i].show();
		f[i].applyForce(grav);
		if(f[i].exp) {
			f.splice(i, 1);
		}
	}
	for (var j = 0; j < p.length; j++) {
		p[j].update();
		p[j].show();
		p[j].applyForce(grav);
		
		if(p[j].life <= 0) {
			p.splice(j, 1);
		}
	}
	
	if(random(1) < 0.15) { 
		f.push(new firework(width/2, height/2));
	}
}