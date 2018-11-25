function firework() {
	this.pos = createVector(random(width), height);
	this.vel = createVector(0, random(-15, -8));
	this.acc = createVector(0, 0);
	this.exp = false;
	this.hue = random(255);
	
	this.update = function() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
		
		if(this.vel.y >= 0 && !this.exp) {
			this.explode();
		}
	}
	
	this.applyForce = function(f) {
		this.acc.add(f);
	}
	
	this.show = function() {
		strokeWeight(4);
		stroke(this.hue, 255, 255);
		point(this.pos.x, this.pos.y);
	}
	
	this.explode = function() {
		this.exp = true;
		
		var inc = TWO_PI/75;
		var rot = random(0, TWO_PI);
		var s = random(1, 3);
		var rgen = true;
		var r = sRandom();
		
		var shape = shapes[r];
		for (var i = 0; i < TWO_PI * shape.size; i += inc) {
			var vel = shape.getPoint(i, rot);
			vel.mult(s);
			p.push(new particle(this.pos.x, this.pos.y, vel, this.hue));
		}
	}
}