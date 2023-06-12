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

		var anim;
		var element;

		this.el.addEventListener("loaded", evt => {
			if (command == "open") {
				element = this.el.nextElementSibling;
			} else if (command == "close") {
				element = this.el.parentElement;
			}

			anim = element.components["animate"];
		})

		function displayInfo() {
			element.previousElementSibling.setAttribute("scale", "0 0 0");
			anim.show();
		}

		function hideInfo() {
			element.previousElementSibling.setAttribute("scale", "1 1 1");
			anim.hide();
		}

		this.setInfo = function() {
			if (command == "open") {
				displayInfo();
			} else if (command == "close") {
				hideInfo();
			}
		}
		this.el.addEventListener('click', this.setInfo);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setInfo);
	}
})
