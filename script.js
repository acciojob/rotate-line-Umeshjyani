//your JS code here. If required.
let line=document.querySelector("#line");
let angle=0;
function rotate() {
	angle+=1;
	if(angle==360)
		angle=0;
	line.style.transform=`rotate(${angle}deg)`
}
setInterval(rotate,0);
