var multiplier = 1;
const cam = document.getElementById("camera");

window.addEventListener('wheel', e => {
	if (lock) {
		multiplier += (e.deltaY / 500);
		multiplier = Math.min(Math.max(multiplier, 0.25), 1);
		multiplier = Math.round((multiplier + Number.EPSILON) * 100) / 100;

		fov();

		e.preventDefault();
	}
}, {passive: false});

// Altering base FOV for clarity purposes.
var prevHeight = 0;
var prevMultiplier = 1;
var canvas = document.querySelector("canvas");

function fov() {
	var height = canvas.offsetHeight;
	var width = canvas.offsetWidth;

	if (prevHeight != height || prevMultiplier != multiplier) {
		var fov = (height / width) * 160 * multiplier;
		fov = Math.min(fov, 90);
		fov *= multiplier;

		let mycam = cam.getAttribute("camera");
		mycam.aspect = cam.getObject3D('camera').aspect;
		cam.setAttribute("camera", mycam);

		cam.setAttribute("animation", "to", fov);
		cam.emit("fov");

		prevHeight = height;
		prevMultiplier = multiplier;
	}
}

new ResizeObserver(fov).observe(canvas);
fov();