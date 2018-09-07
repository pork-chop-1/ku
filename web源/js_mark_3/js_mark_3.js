function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){	//检查是否已经有函数绑定了.onload
		window.onload=func;					//没有，常规绑定
	}else{									//有
		window.onload=function(){			//嵌套一波
			oldonload();
			func();
		}
	}
}

var left;
var right;

function createSome()
{
	var move=document.createElement("div");
	var moveText=document.createTextNode("this is (ノ=Д=)ノ┻━┻what need to move")
	move.setAttribute("id","move");
	move.appendChild(moveText);
	var bodyElement=document.getElementsByTagName("body")[0];
	bodyElement.appendChild(move);
	move.style.position="absolute";
	move.style.top="160px";
	move.style.left="160px";
}

function positionMessage()
{
	var move=document.getElementById("move");
	left=moveElement("move",400,400,50);
	
}

function empty(){}

function moveElement(elementID,final_x,final_y,interval)
{
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID))  return false;
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	var xpos=parseFloat(elem.style.left);
	var ypos=parseFloat(elem.style.top);
	if(xpos==final_x && ypos==final_y){
		
		return true;
	}
	if(xpos<final_x){
		xpos+=Math.ceil((final_x-xpos)/20);
	}
	if(ypos<final_y){
		ypos+=Math.ceil((final_y-ypos)/20);
	}
	if(ypos>final_y){
		ypos+=Math.ceil((final_y-ypos)/20);
	}
	if(xpos>final_x){
		xpos+=Math.ceil((final_x-xpos)/20);
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}
function f()
{
	var move=document.getElementById("move");
	
	moveElement("move",1,1,50);
}

function stop()
{
	var elem=document.getElementById("move")
	if(elem.movement){
		clearTimeout(elem.movement);
	}
}
addLoadEvent(createSome);