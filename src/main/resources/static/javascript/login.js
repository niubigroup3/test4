function login(){

	var usname = document.getElementById("username");
	var uspwd = document.getElementById("password");

	if(usname.value == ""){   //验证用户名是否为空
		window.alert("用户名不能为空！");
		window.location.reload();

	}else if( usname.value !="admin"){
		window.alert("用户名错误！");
		location.reload();

	}else if(uspwd.value ==""){
		window.alert("密码不能为空！");
		location.reload();
	}
	else if(uspwd.value != "admin"){
		window.alert("密码错误");
		location.reload();
	}
	else
		window.alert("登录成功！");
}
