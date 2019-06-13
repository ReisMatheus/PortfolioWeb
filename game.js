var config = {
	type: Phase.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phase.Game(config);

function preload(){}
function create(){}
function update(){}
