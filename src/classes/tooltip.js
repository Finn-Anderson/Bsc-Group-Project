/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display
*/

AFRAME.registerComponent('tooltip', {
	init: function() {
		var timer;
		var element = this.el;
		var clicked = false;

		this.el.addEventListener("mouseenter", (e) => {
			timer = setTimeout(function() {
				if (element.getAttribute("visible") == true && !clicked) {
					var tooltip = document.createElement("a-entity");
					tooltip.setAttribute("id", "tooltip");
					tooltip.setAttribute("text", "value: Click to interact.");
					tooltip.setAttribute("position", "1.65 -0.75 0");
					tooltip.setAttribute("scale", "5 5 5");

					element.appendChild(tooltip);
				}
			}, 1000);
		});

		this.clear = function() {
			var tooltip = document.getElementById("tooltip");

			if (tooltip) {
				tooltip.remove();
			}
			
			clearTimeout(timer);
		}

		this.el.addEventListener('mouseleave', this.clear);
		this.el.addEventListener('click', (e) => {
			clicked = !clicked;
			this.clear();
		});
	},
	remove: function() {
		this.el.removeEventListener('click', this.clear);
	}
})