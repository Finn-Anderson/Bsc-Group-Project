var lock = false;

function LockScroll() {
	lock = true;
	document.querySelector("body").style.overflow = "hidden";
}

function UnlockScroll() {
	lock = false;
	document.querySelector("body").style.overflow = "auto";
}

var canvas = document.querySelector("canvas");
canvas.onmouseover = LockScroll;
canvas.onmouseout = UnlockScroll;