/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display
*/

AFRAME.registerComponent('nav', {
	init: function() {
		var dropdown = document.querySelector('#dropdown');

		function displayNav() {
			dropdown.setAttribute("scale", "1 1 1");
		}

		function hideNav() {
			dropdown.setAttribute("scale", "0 0 0");
		}

		this.setNav = function() {
			var command = dropdown.getAttribute("scale");

			if (command.x >= 1) {
				hideNav();
			} else if (command.x < 1) {
				displayNav();
			}
		}
		this.el.addEventListener('click', this.setNav);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setNav);
	}
})