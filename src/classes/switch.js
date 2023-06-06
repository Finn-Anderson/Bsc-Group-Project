/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display
*/

AFRAME.registerComponent('switch', {
	schema: {
		cmd:{type:"string",default:""},
	},

	init: function() {
		var bottom = document.getElementsByClassName("bottom-floor");
		var top = document.getElementsByClassName("top-floor");

		var bottomVal;
		var topVal;

		function switchFloor() {
			for (const el of bottom) {
				el.setAttribute("scale", bottomVal);
			}

			for (const el of top) {
				el.setAttribute("scale", topVal);
			}
		}

		this.setSwitch = function() {
			var topFloor = (this.getAttribute("topFloor") === "true");
			topFloor = !topFloor;

			this.setAttribute("topFloor", topFloor);

			if (topFloor) {
				bottomVal = "0 0 0";
				topVal = "1 1 1";
			} else {
				bottomVal = "1 1 1";
				topVal = "0 0 0";
			}

			switchFloor();
		}

		this.el.addEventListener('click', this.setSwitch);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setNav);
	}
})