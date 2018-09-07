function showPic(whichpic)
{
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	//placeholder.src=source;
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("text") ? whichpic.getAttribute("text") : "";
		var description=document.getElementById("description");
		if(description.firstChild.nodeType=3){
			description.firstChild.nodeValue=text;
		}
	}
	return true;
}
function prepareGallery()
{
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById("imagegallery")){
		return false;
	}
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i!=links.length;i++){
		links[i].onclick=function(){
			return !showPic(this);
		}
	}
}
/*window.onload=function(){
	prepareGallery();
}*/
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
function preparePlaceholder()
{
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var imageView=document.createElement("img");
	imageView.setAttribute("id","placeholder");
	imageView.setAttribute("src","file:///C:/Users/js/Desktop/桌面临时文件/gallery_view.jpg");
	imageView.setAttribute("height","500em");
	imageView.setAttribute("width","900em");
	var pView=document.createElement("p");
	pView.setAttribute("id","description");
	var ptext=document.createTextNode("choose an image");
	pView.appendChild(ptext);
	var bodyElement=document.getElementsByTagName("body")[0];
	var ul=document.getElementById("imagegallery");
	insertAfter(imageView,ul);
	ul.appendChild(pView);
}
function insertAfter(newElement,targetElement)			//在目标元素后面插入节点
{
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);