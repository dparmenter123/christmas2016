function step1() {
    
};


function step2() {
    var orn = {
	top: '260px',
	left: '50px'
    };
    var bird1 = {
	top: '73px',
	left: '300px'
    };
    var bird2 = {
	top: '233px',
	left: '538px'
    };
    var bird3 = {
	top: '133px',
	left: '199px'
    };
    $("#ornaments").css("display", "initial");
    $("#bird1").animate(bird1, { duration: 5000 });
    $("#bird2").animate(bird2, { duration: 5000 });
    $("#bird3").animate(bird3, { duration: 7000 });
 //   $("#bird2").animate(bird2, { duration: 7000, easing: 'easeInOutCubic' });
    $("#ornaments").animate(orn, { duration: 4000 });
};


