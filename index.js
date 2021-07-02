let digitalclock = () => {
	let date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	let scope = hours >= 12 ? 'pm': 'am';


	document.getElementById("hour").innerHTML = hours;
	document.getElementById("min").innerHTML = minutes;
	document.getElementById("sec").innerHTML = seconds;
	document.getElementById("scope").innerHTML = scope;

	setTimeout(digitalclock,500);
}

digitalclock();