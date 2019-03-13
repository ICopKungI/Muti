//<<<<<<< HEAD
var x, y, i, j = -1, k = 0, z,time = 0;
//random
//=======
var x, y, i, j = -1, k;

//>>>>>>> da149c64473fced7fb2053d6689dbdf2babd7987
setInterval(function(){
	x = getRandomInt(0, 9);
	y = 0;
	document.querySelector('.random1').setAttribute('x',x);
	document.querySelector('.random1').setAttribute('y',y);
},1000)

setInterval(function(){
	x = getRandomInt(1, 10);
	y = 9;
	document.querySelector('.random2').setAttribute('x',x);
	document.querySelector('.random2').setAttribute('y',y);
},1000)

setInterval(function(){
	x = 9;
	y = getRandomInt(0, 9);
	j++;
	if (j == 0) {
		z = y;
	}
	document.querySelector('.random3').setAttribute('x',x);
	document.querySelector('.random3').setAttribute('y',y);
	document.querySelector('.test').setAttribute('x',j);
	document.querySelector('.test').setAttribute('y',z);
},1000)

setInterval(function(){
	x = 0;
	y = getRandomInt(1, 10);
	document.querySelector('.random4').setAttribute('x',x);
	document.querySelector('.random4').setAttribute('y',y);
},1000)

//<<<<<<< HEAD
//

/*setInterval(function(){
	j++
	for (i = 0; i < 3; i++) {
		if (j > 9) {
			break;
		}
		var name = '.ansbox' + i;
		document.querySelector(name).setAttribute('x',j);
	}
},1000)*/
/*=======
setInterval(function(){
	x = 4;
	j++;
	if (j > 9) {
		x = 10;
		j = 10;
	}
	document.querySelector('.test').setAttribute('x',x);
	document.querySelector('.test').setAttribute('j',j);
},1000)

>>>>>>> da149c64473fced7fb2053d6689dbdf2babd7987*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//เช็คปุ่ม
document.onkeydown = function(i){
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
}
	