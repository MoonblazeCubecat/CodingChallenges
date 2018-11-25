var shapes = [
{
	name: "random",
	getPoint: function(a, rot) {
		var r = random(2);
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 1
},
{
	name: "circle",
	getPoint: function(a, rot) {
		var r = random(1, 1.5);
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 1
},
{
	name: "heart",
	getPoint: function(a, rot) {
		var r = sin(a)*sqrt(abs(cos(a))) / (sin(a) + 7/5) - 2*sin(a) + 2;
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 1
},
{
	name: "star",
	getPoint: function(a, rot) {
		var r = superShape(a, 1, 1, 5, 0.15, 1.7, 1.7);
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 1
},
{
	name: "bigrandom",
	getPoint: function(a, rot) {
		var r = random(8);
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 3
},
{
	name: "bigcircle",
	getPoint: function(a, rot) {
		var r = random(4, 5);;
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 3
},
{
	name: "bigheart",
	getPoint: function(a, rot) {
		var r = (sin(a)*sqrt(abs(cos(a))) / (sin(a) + 7/5) - 2*sin(a) + 2) * 2 + 1;
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 3
},
{
	name: "bigstar",
	getPoint: function(a, rot) {
		var r = superShape(a, 1, 1, 5, 0.15, 1.7, 1.7)*5;
		var x = r * cos(a + rot);
		var y = r * sin(a + rot);
		return createVector(x, y);
	},
	size: 3
}
];
