function registration(){
	console.log('Проверка')
	
	let pass = document.getElementById('pass').value;
	let repass = document.getElementById('repass').value;
	
	if ((pass != repass) || ((pass == "") && (repass == ""))) {alert('Пароли не совпадают!');}
	if ((pass == repass) && (pass != "") && (repass != "")) {alert('Вы успешно зарегестрированы');}
}