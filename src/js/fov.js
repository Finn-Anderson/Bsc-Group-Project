var multiplier = 1;
const cam = document.getElementById("camera");

window.addEventListener('wheel', e => {
	if (lock) {
		multiplier += (e.deltaY / 500);
		multiplier = Math.min(Math.max(multiplier, 0.25), 1);
		multiplier = Math.round((multiplier + Number.EPSILON) * 100) / 100;

		fov();
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

		cam.setAttribute("animation", "to", fov);
		cam.emit("fov");

		prevHeight = height;
		prevMultiplier = multiplier;
	}
}

window.addEventListener("resize", fov);
fov();