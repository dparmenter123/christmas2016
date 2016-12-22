function step1() {
    
};


function step2() {
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
    $("#bird1").animate(bird1, { duration: 5000 });
    $("#bird2").animate(bird2, { duration: 5000 });
    $("#bird3").animate(bird3, { duration: 7000 });
 //   $("#bird2").animate(bird2, { duration: 7000, easing: 'easeInOutCubic' });
    $("#ornaments").animate(orn, { duration: 4000 });
};


