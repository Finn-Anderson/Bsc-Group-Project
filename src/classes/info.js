/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display 
*/

AFRAME.registerComponent('info', {
	schema: {
		cmd:{type:"string",default:""},
	},

	init: function() {
		var command = this.data.cmd;

		function displayInfo(hotpoint) {
			hotpoint.setAttribute("scale", "10 10 10");

			hotpoint.previousElementSibling.setAttribute("scale", "0 0 0");
		}

		function hideInfo(hotpoint) {
			hotpoint.setAttribute("scale", "0 0 0");

			hotpoint.previousElementSibling.setAttribute("scale", "1 1 1");
		}

		this.setInfo = function() {
			if (command == "close") {
				hideInfo(this.parentElement);
			} else if (command == "open") {
				displayInfo(this.nextElementSibling);
			}
		}
		this.el.addEventListener('click', this.setInfo);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setInfo);
	}
})
