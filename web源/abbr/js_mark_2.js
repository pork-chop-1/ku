//注意变量名大小写啊，尤其是预定属性和功能


function insertAfter(newElement,targetElement)
{
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function displayAbbreviations()
{
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode){
		return false;
	}
	//取得所有缩略词
    var abbreviations=document.getElementsByTagName("abbr");
    if(!abbreviations.length) return false;
	var defs = new Array();
	//遍历这些缩略词
    for (var i=0;i<abbreviations.length;i++){
		var current_abbr=abbreviations[i];
		if(current_abbr.length<1) continue;//检测
		var definition=current_abbr.getAttribute("title");
		var key=current_abbr.childNodes[0].nodeValue;//lastNOde
		defs[key]=definition;//把i改成key
	}
	//创建定义列表
	var dlist=document.createElement("dl");
	//遍历定义
	for (key in defs){
		var definition=defs[key];
		//创建定义标题
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1) return false;//检测
	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//设置class以供样式修改;
	header.setAttribute("class","abbr_head");
	dlist.setAttribute("class","abbr_list");
	//把标题添加到页面
	document.body.appendChild(header);
	//把定义列表添加到页面
	document.body.appendChild(dlist);
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(displayAbbreviations);

function displayCitations()
{
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode){
		return false;
	}
	//遍历blockquote
	var quotes=document.getElementsByTagName("blockquote");
	
	for(var i=0;i<quotes.length;i++){
		//如果cite没有属性，下一个循环
		if(!quotes[i].getAttribute("cite")){
			continue;
		}
		//得到cite的url
		var url=quotes[i].getAttribute("cite");
		//网址的添加位置
		var quotechildren=quotes[i].getElementsByTagName('*');
		//如果没有节点元素，下一个循环
		if(quotechildren.length<1) continue;
		
		var elem=quotechildren[quotechildren.length-1];
		
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.setAttribute("href",url);
		link.appendChild(link_text);
		//创建上标元素
		var superscript=document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}

}

addLoadEvent(displayCitations);

function getcolor()
{
	var a=document.getElementsByTagName("p")[1];
	
	a.style.color="gray";
}
addLoadEvent(getcolor);
