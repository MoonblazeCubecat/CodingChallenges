function particle(x, y, vel, hue) {
	this.pos = createVector(x, y);
	this.vel = vel.add(p5.Vector.random2D().mult(0.1));
	this.acc = createVector(0, 0);
	this.life = 255;
	this.hue = hue;
	
	this.update = function() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
		
		this.vel.mult(0.9);
		
		this.life -= 5;
	}
	
	this.applyForce = function(f) {
		var k = f.copy();
		this.acc.add(k.mult(0.25));
	}
	
	this.show = function() {
		strokeWeight(2);
		stroke(this.hue, 255, 255, this.life);
		point(this.pos.x, this.pos.y);
	}
}