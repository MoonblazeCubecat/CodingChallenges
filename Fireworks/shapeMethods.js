function superShape(theta, a, b, m, n1, n2, n3) {
	var p1 = (1/a) * (cos(theta*m/4));
	p1 = abs(p1);
	p1 = pow(p1, n2);
	
	var p2 = (1/b) * (sin(theta*m/4));
	p2 = abs(p2);
	p2 = pow(p2, n3);
	
	var p3 = pow(p1 + p2,1/n1);
	
	if(p3 == 0) {
		return 0;
	}
	
	return 1/p3;
}

function sRandom() {
	var r1 = floor(random(shapes.length));
	var r2 = floor(random(r1+1));
	return r2;
}
