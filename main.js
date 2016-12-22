function snow() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);

    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    
    //snowflake particles
    var mp = 2500; //max particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
	particles.push({
	    x: Math.random()*W, //x-coordinate
	    y: Math.random()*H, //y-coordinate
	    r: Math.random()*4+1, //radius
	    d: Math.random()*mp //density
	})
    }

    //Lets draw the flakes
    function draw()
    {
	ctx.clearRect(0, 0, W, H);
	
	ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
	ctx.fillStyle = "#CCCCCC";
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
    var orn = {
	top: '204px',
	left: '44px'
    };
    var bird1 = {
	top: '54px',
	left: '225px'
    };
    var bird2 = {
	top: '175px',
	left: '402px'
    };
    var bird3 = {
	top: '97px',
	left: '149px'
    };
    $("#ornaments").css("display", "initial");
    $("#bird1").animate(bird1, { duration: 5000, easing: 'easeInOutCubic' });
    $("#bird2").animate(bird2, { duration: 5000, easing: 'easeInOutCubic' });
    $("#bird3").animate(bird3, { duration: 7000, easing: 'easeInOutCubic' });
    $("#ornaments").animate(orn, { duration: 4000 });
    $("#canvas").animate(snow, { duration: 10000 });
};

function run() {
    snow();
    step1();
}
