function logout(){
	window.location.href=("login.html");
}

//菜单点击变色
$(function(){
	var urlstr = location.href;
	var urlstatus=false;
$("#search").each(function () {	
	$(this).addClass("newselectMenu"); 

if (!urlstatus) {
	$("#search").eq(0).addClass("newselectMenu"); 
}
});
$("#selectMenu a").each(function () {	
	$(this).addClass("aclass");
	$(this).children("img").attr("src","image/newtable.png");
	$(this).children("img").attr("width","21");
	$(this).children("img").attr("height","20");
});

});