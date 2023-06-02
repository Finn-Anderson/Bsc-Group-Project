var lock = false;

function LockScroll() {
	lock = true;
}

function UnlockScroll() {
	lock = false;
}

var canvas = document.querySelector("canvas");
canvas.onmouseover = LockScroll;
canvas.onmouseout = UnlockScroll;