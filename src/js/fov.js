var multiplier = 1;
window.addEventListener('wheel', e => {
	if (lock) {
		multiplier += (e.deltaY / 1000);
		multiplier = Math.min(Math.max(multiplier, 0.25), 1);
		fov()
	}
})

// Altering base FOV for clarity purposes.
var prevHeight = 0;
var prevMultiplier = 1;

function fov() {
	var height = document.querySelector("canvas").offsetHeight;
	var width = document.querySelector("canvas").offsetWidth;

	if (prevHeight != height || prevMultiplier != multiplier) {
		var fov = (height / width) * 160 * multiplier;
		console.log(fov);

		document.getElementById("camera").setAttribute("fov", fov);

		prevHeight = height;
		prevMultiplier = multiplier;
	}
}

window.addEventListener("resize", fov);
fov();