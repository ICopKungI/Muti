var x, y, i, time = 0;
var move_3 = 9, move_4 = -1, point_start_3, point_start_4 = 10;
var move_1 = 0, move_2 = 10, point_start_1, point_start_2 = 10;
var move_5 = 9, move_6 = -1, point_start_5, point_start_6 = 10;
var move_7 = 0, move_8 = 10, point_start_7, point_start_8 = 10;
//random&enemy

setInterval(function(){
	x = getRandomInt(0, 9);
	y = 0;
	if ((move_1 == 0) || (move_1 > 9)) {
		point_start_1 = x;
		move_1 = 0;
	}
	if (move_1 == 4) {
		point_start_2 = x;
		move_2 = 0;
	}
	document.querySelector('.enemy1').setAttribute('x',point_start_1);
	document.querySelector('.enemy1').setAttribute('y',move_1);
	document.querySelector('.enemy2').setAttribute('x',point_start_2);
	document.querySelector('.enemy2').setAttribute('y',move_2);
	document.querySelector('.random1').setAttribute('x',x);
	document.querySelector('.random1').setAttribute('y',y);
	move_1++;
	move_2++;
}, getinterval(2000))

setInterval(function(){
	x = getRandomInt(1, 10);
	y = 9;
	if ((move_3 == 9) || (move_3 < 0)) {
		point_start_3 = x;
		move_3 = 9;
	}
	if (move_3 == 5) {
		point_start_4 = x;
		move_4 = 9;
	}
	document.querySelector('.enemy3').setAttribute('x',point_start_3);
	document.querySelector('.enemy3').setAttribute('y',move_3);
	document.querySelector('.enemy4').setAttribute('x',point_start_4);
	document.querySelector('.enemy4').setAttribute('y',move_4);
	document.querySelector('.random2').setAttribute('x',x);
	document.querySelector('.random2').setAttribute('y',y);
	move_3--;
	move_4--;
},1000)

setInterval(function(){
	x = 9;
	y = getRandomInt(0, 9);
	if ((move_5 == 9) || (move_5 < 0)) {
		point_start_5 = y;
		move_5 = 9;
	}
	if (move_5 == 5) {
		point_start_6 = y;
		move_6 = 9;
	}
	document.querySelector('.enemy5').setAttribute('x',move_5);
	document.querySelector('.enemy5').setAttribute('y',point_start_5);
	document.querySelector('.enemy6').setAttribute('x',move_6);
	document.querySelector('.enemy6').setAttribute('y',point_start_6);
	document.querySelector('.random3').setAttribute('x',x);
	document.querySelector('.random3').setAttribute('y',y);
	move_5--;
	move_6--;
},1000)

setInterval(function(){
	x = 0;
	y = getRandomInt(1, 10);
	if ((move_7 == 0) || (move_7 > 9)) {
		point_start_7 = y;
		move_7 = 0;
	}
	if (move_7 == 4) {
		point_start_8 = y;
		move_8 = 0;
	}
	document.querySelector('.enemy7').setAttribute('x',move_7);
	document.querySelector('.enemy7').setAttribute('y',point_start_7);
	document.querySelector('.enemy8').setAttribute('x',move_8);
	document.querySelector('.enemy8').setAttribute('y',point_start_8);
	document.querySelector('.random4').setAttribute('x',x);
	document.querySelector('.random4').setAttribute('y',y);
	move_7++;
	move_8++;
},1000)


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getinterval(num){
	return num/2;
}

//เช็คปุ่ม
setInterval(function(){
		// เพิ่มเวลา
		++time;
		// อัพเดทเวลา
		theTime.innerText = time;
},1000)
/*document.onkeydown = function(i){
	if(event.keyCode == 32){ 
		timep();
	}
};
function timep(){
	cd = setInterval(function(){
		// เพิ่มเวลา
		time++;
		// อัพเดทเวลา
		updateTime();
},1000)}
 function updateTime(){
    	// แสดงเวลา
    	theTime.innerText = time;
}*/