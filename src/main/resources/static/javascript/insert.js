function logout(){
	window.location.href=("login.html");
}

//菜单点击变色
$(function(){
	var urlstr = location.href;
	var urlstatus=false;
$("#insert").each(function () {	
	$(this).addClass("newinsertMenu"); 

if (!urlstatus) {
	$("#insert").eq(0).addClass("newinsertMenu"); 
}
});
$("#insertMenu li").each(function () {	

	$(this).html('<a class="aclass" href="insert.html">'+
		'<img src="image/newinsert.png" width="22">'
		+ '销售录入</a>');
});
});

function btnValidate(){
	var name = document.getElementById("name");
	var bond = document.getElementById("bond");
	var date = document.getElementById("date");
	var money = document.getElementById("money");
	var alert = document.getElementById("Alert");
	var addBtn = document.getElementById("addBtn");
	if(name.value != "" && bond.value != "" && date.value != "" && money.value != ""){
	addBtn.disabled = false;
	}else {
	alert.innerHTML="&nbsp请正确填写信息!";
	addBtn.disabled = true;
	}
}

function validateName(){
	var name = document.getElementById("name");
	var alert = document.getElementById("Alert");
		var addBtn = document.getElementById("addBtn");
	if(name.value == ""){
		alert.innerHTML="&nbsp请选择销售姓名!";
		addBtn.disabled = true;
	}
	else {
		alert.innerHTML=null;
		addBtn.disabled = false;}
}

function validateBond(){
	var bond = document.getElementById("bond");
	var alert = document.getElementById("Alert");
		var addBtn = document.getElementById("addBtn");
	if(bond.value == ""){
		alert.innerHTML="&nbsp请选择债券类型!";
		addBtn.disabled = true;
	}
	else {
		alert.innerHTML=null;
		addBtn.disabled = false;}
}

function validateDate(){
	var date = document.getElementById("date");
	var alert = document.getElementById("Alert");
		var addBtn = document.getElementById("addBtn");
	if(date.value == ""){
		alert.innerHTML="&nbsp请选择日期!";
		addBtn.disabled = true;
	}
	else {
		alert.innerHTML=null;
		addBtn.disabled = false;}
}

function validateMoney(){
	var money = document.getElementById("money");
	var alert = document.getElementById("Alert");
	var monVal = money.value;
		var addBtn = document.getElementById("addBtn");
	if(money.value == ""){
		alert.innerHTML="&nbsp请填写销售金额!";
		addBtn.disabled = true;
	}else if(!/^[0-9]*$/gi.test(money.value)){
		alert.innerHTML="&nbsp销售金额必须为纯数字!";
		addBtn.disabled = true;
	}
	else {
		alert.innerHTML=null;
		addBtn.disabled = false;}
}