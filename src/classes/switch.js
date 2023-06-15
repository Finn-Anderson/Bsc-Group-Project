/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Switch between floors
*/

AFRAME.registerComponent('switch', {
	schema: {
		topFloor:{type:"string",default:""},
	},

	init: function() {
		var topFloor = this.data.topFloor;

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
			const elements = document.getElementsByClassName("switch");

			for (var i = 0; i < elements.length; i++) {
				if (elements[i] == this) {
					elements[i].setAttribute("material", "color: #7655D2");
					elements[i].setAttribute("hover", "colour: #7655D2");
				} else {
					elements[i].setAttribute("material", "color: #000");
				}
			}

			if (topFloor == "true") {
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
		this.el.removeEventListener('click', this.setSwitch);
	}
})