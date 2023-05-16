/*
	Development build version: 0.1
	Build date: 02/03/2023
	Author: Bsc Team Project Group 2023
	Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('menu', {
	schema: {
		cmd:{type:"string",default:""},
	},

	init: function() {

		var command = this.data.cmd;

		function setInformation(hotpoint) {
			hotpoint.setAttribute("scale", "10 10 10");

			hotpoint.previousElementSibling.setAttribute("visible", "false");
		}

		function setInformationIcon(hotpoint) {
			hotpoint.setAttribute("scale", "0 0 0");

			hotpoint.previousElementSibling.setAttribute("visible", "true");
		}

		this.setMenu = function() {
			if (command == "close") {
				setInformationIcon(this.parentElement);
			} else if (command == "open") {
				setInformation(this.nextElementSibling);
			}
		}
		this.el.addEventListener('click', this.setMenu);
	},
	update: function() {},
	remove: function() {
		this.el.removeEventListener('click', this.setMenu);
	}
})
