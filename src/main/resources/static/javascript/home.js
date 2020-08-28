

// function changediv1(){

//     var home = document.getElementById('home');
//     var insertdata = document.getElementById('insertData');
//     var salesData = document.getElementById('SalesData');
// 	//var last = 0;  

//     if(salesData.style.display=="block" || insertdata.style.display=="block"){
// 	salesData.style.display="none";
// 	insertdata.style.display="none";
// 	home.style.display="block";
// }
// }

// function changediv2(){
//      var home = document.getElementById('home');
//     var insertdata = document.getElementById('insertData');
//     var salesData = document.getElementById('SalesData');
  
//     if(home.style.display=="block" || salesData.style.display=="block"){
// 	home.style.display="none";
// 	salesData.style.display="none";
// 	insertdata.style.display="block";

		
// }
// }

// function changediv3(){
// 	 var home = document.getElementById('home');
//     var insertdata = document.getElementById('insertData');
//     var salesData = document.getElementById('SalesData');
//      if(home.style.display=="block" || insertdata.style.display=="block"){
// 	home.style.display="none";
// 	insertdata.style.display="none";
// 	salesData.style.display="block";
// }
// }
// // }

function logout(){
	window.location.href=("login.html");
}


 // function search(v){

//  $(function() {
//         var options = {
//             //需要刷新的区域id
//          type: 'POST',
//          dataType: 'jsons',
//          target:'#tableBody',
//         success:function(){
//         	alert("添加成功！");
//         },  
//         error : function() {			
//             alert("操作失败");
//         }
           
//         };        //绑定FORM提交事件
//         $('#searchTable').submit(function() {
//             $(this).ajaxSubmit(options);
//             return false; //阻止表单自动提交
//         });
//     });
// }

//菜单点击变色
$(function(){
	var urlstr = location.href;
	var urlstatus=false;
$("#homeMenuDiv").each(function () {	
	$(this).addClass("newhomeMenu"); 

if (!urlstatus) {
	$("#homeMenuDiv").eq(0).addClass("newhomeMenu"); 
}
});
$("#homeMenu li").each(function () {	
	$(this).html('<a class="aclass" href="home.html">'
		+'<img src="image/newhome.png" width="20" height="18">'
		+ '主页</a>');
});
});