//your JS code here. If required.
let line=document.querySelector("#line");
let angle=0;
function rotate() {
	angle+=1;
	line.style.transform=`rotate(${angle}deg)`
}
setInterval(rotate,0);
