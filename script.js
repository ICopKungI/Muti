var x, y, i, j = -1, k;

setInterval(function(){
	x = getRandomInt(0, 9);
	y = 0;
	document.querySelector('.enemy1').setAttribute('x',x);
	document.querySelector('.enemy1').setAttribute('y',y);
},1000)

setInterval(function(){
	x = getRandomInt(1, 10);
	y = 9;
	document.querySelector('.enemy2').setAttribute('x',x);
	document.querySelector('.enemy2').setAttribute('y',y);
},1000)

setInterval(function(){
	x = 9;
	y = getRandomInt(0, 9);
	document.querySelector('.enemy3').setAttribute('x',x);
	document.querySelector('.enemy3').setAttribute('y',y);
},1000)

setInterval(function(){
	x = 0;
	y = getRandomInt(1, 10);
	document.querySelector('.enemy4').setAttribute('x',x);
	document.querySelector('.enemy4').setAttribute('y',y);
},1000)

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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}