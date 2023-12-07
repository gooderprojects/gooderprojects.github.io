let cookies = 0;
let tbfs = 0;
let grandmas = 0;
let belts = 0;
let tbfp = 0;
let gmp = 0;
let bp = 0;

if (localStorage.getItem("cookie1") == "NaN" || localStorage.getItem("tbfs") == "NaN" || localStorage.getItem("grandmas") == "NaN" || localStorage.getItem("belts") == "NaN" || localStorage.getItem("tbfp") == "NaN" || localStorage.getItem("gmp") == "NaN" || localStorage.getItem("bp") == "NaN") {
	saveData();
	window.location.reload();
}

function loadData() {
	cookies = parseInt(localStorage.getItem("cookie1"));
	tbfs = parseInt(localStorage.getItem("tbfs"));
	grandmas = parseInt(localStorage.getItem("grandmas"));
	belts = parseInt(localStorage.getItem("belts"));
	tbfp = parseInt(localStorage.getItem("tbfp"));
	gmp = parseInt(localStorage.getItem("gmp"));
	bp = parseInt(localStorage.getItem("bp"));
}

loadData();

function clickCookie() {
	cookies += 1;
	document.getElementById("counter").innerHTML = cookies.toString()+" cookies";
	updateStuff();
}

function button1() {
	tbfp = tbfs ** 2 + 10;
	if (tbfp <= cookies) {
		tbfs += 1;
		cookies -= tbfp;
	}
	updateStuff();
}

function button2() {
	gmp = grandmas ** 3 + 15;
	if (gmp <= cookies) {
		grandmas += 1;
		cookies -= gmp;
	}
	updateStuff();
}

function button3() {
	bp = belts ** 4 + 30;
	if (bp <= cookies) {
		belts += 1;
		cookies -= bp;
	}
	updateStuff();
}

function updateStuff() {
	document.getElementById("counter").innerHTML = cookies.toString()+" cookies";
	document.getElementById("tbfs").innerHTML = tbfs.toString()+" - 2x4s (whack the cookies with a piece of wood) price: "+tbfp.toString();
	document.getElementById("grandmas").innerHTML = grandmas.toString()+" - Grandmas (whack some cookies with your grandma) price: "+gmp.toString();
	document.getElementById("belts").innerHTML = belts.toString()+" - Belts (whip cookies with a belt) price: "+bp.toString();
}


// cookies = 0;
// tbfs = 0;
// grandmas = 0;
// belts = 0;
// tbfp = 10;
// gmp = 15;
// bp = 30;

function resetData() {
	localStorage.setItem("cookie1", 0)
	localStorage.setItem("tbfs",0);
	localStorage.setItem("grandmas", 0);
	localStorage.setItem("belts", 0);
	localStorage.setItem("tbfp", 0);
	localStorage.setItem("gmp", 0);
	localStorage.setItem("bp", 0);
	window.location.reload();
}

function saveData() {
	localStorage.setItem("cookie1", cookies);
	localStorage.setItem("tbfs",tbfs);
	localStorage.setItem("grandmas", grandmas);
	localStorage.setItem("belts", belts);
	localStorage.setItem("tbfp", tbfp);
	localStorage.setItem("gmp", gmp);
	localStorage.setItem("bp", bp);
}

// Main loop
var myfunc = setInterval(function() {
	cta = 0
	for (let i = tbfs; i > 0; i--) {
		cta += 1;
	}

	for (let i = grandmas; i > 0; i--) {
		cta += 2;
	}

	for (let i = belts; i > 0; i--) {
		cta += 4;
	}
	cookies += cta;
	document.getElementById("cps").innerHTML = cta.toString()+" cookies per second";

	updateStuff();
	saveData();

}, 1000)
