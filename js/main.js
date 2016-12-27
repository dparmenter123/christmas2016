function snow(canv, mp, style) {
    var canvas = document.getElementById(canv);
    var ctx = canvas.getContext("2d");

    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    
    //snowflake particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
	particles.push({
	    x: Math.random() * W,   //x-coordinate
	    y: Math.random() * H,   //y-coordinate
	    r: Math.random() * 4+1, //radius
	    d: Math.random() * mp   //density
	})
    }

    //Lets draw the flakes
    function draw()
    {
	ctx.clearRect(0, 0, W, H);
	ctx.fillStyle = style;
	ctx.beginPath();
	for(var i = 0; i < mp; i++)
	{
	    var p = particles[i];
	    ctx.moveTo(p.x, p.y);
	    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
	}
	ctx.fill();
    }
    draw();
}

function step1() {
    var snow = {
	height: '50px',
	width: '600px',
	top: '550px'
    };
    var snow2 = {
	height: '100px',
	width: '600px',
	top: '400px'
    };
    var snow3 = {
	height: '150px',
	width: '600px',
	top: '300px'
    };
    var snow4 = {
	height: '200px',
	width: '600px',
	top: '350px'
    };
    var orn = {
	top: '204px',
	left: '44px'
    };
    var bird1 = {
	top: '54px',
	left: '220px'
    };
    var bird2 = {
	top: '165px',
	left: '390px'
    };
    var bird3 = {
	top: '97px',
	left: '149px'
    };
    var card1 = {
	left: '155px',
	top: '190px'
    };
    var card2 = {
	left: '355px',
	top: '230px'
    };
	
    $("#ornaments").css("display", "initial");
    $("#cardinal1").animate(card1, { duration: 3000, easing: 'easeInOutCubic' });
    $("#cardinal2").animate(card2, { duration: 4000, easing: 'easeInOutCubic' });
    $("#bird1").animate(bird1, { duration: 5000, easing: 'easeInOutCubic' });
    $("#bird2").animate(bird2, { duration: 5000, easing: 'easeInOutCubic' });
    $("#bird3").animate(bird3, { duration: 7000, easing: 'easeInOutCubic' });
    $("#ornaments").animate(orn, { duration: 4000 });
    $("#canvas").animate(snow, { duration: 10000, easing: 'easeInOutCubic' });
    $("#canvas2").animate(snow2, { duration: 20000, easing: 'easeInOutCubic' });
    $("#canvas3").animate(snow3, { duration: 20000, easing: 'easeInOutCubic' });
    $("#canvas4").animate(snow4, { duration: 60000, easing: 'easeInOutCubic' });
};

function run() {
    snow("canvas",  1000, "#CCCCCC");
    snow("canvas2", 1000, "#DDDDDD");
    snow("canvas3", 500, "#DDDDDD");
    snow("canvas4", 250, "#DDDDDD");
    step1();
}
