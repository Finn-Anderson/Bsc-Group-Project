var multiplier = 1;
var target = multiplier;
var timer;
window.addEventListener('wheel', e => {
	if (lock) {
		target += (e.deltaY / 500);
		target = Math.min(Math.max(target, 0.25), 1);
		target = Math.round((target + Number.EPSILON) * 100) / 100;

		if (target != multiplier) {
			var blur = document.querySelector("canvas");
			blur.style.filter = "blur(1px)";

			var diff = multiplier - target;

			if (timer) {
				clearInterval(timer);
			}

			var i = 100;
			var multi = multiplier;
			timer = setInterval(function () {
				var perc = i / 100;
				multiplier = multi - (diff * (1 - (perc * perc)));
				multiplier = Math.round((multiplier + Number.EPSILON) * 100) / 100;
				fov();

				if (multiplier == target) {
					clearInterval(timer);
					timer = null;
					blur.style.filter = "none";
				}
				i--;
			}, 1);
		}
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

		document.getElementById("camera").setAttribute("fov", fov);

		prevHeight = height;
		prevMultiplier = multiplier;
	}
}

window.addEventListener("resize", fov);
fov();