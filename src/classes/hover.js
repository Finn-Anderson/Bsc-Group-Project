/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display
*/

AFRAME.registerComponent('hover', {
	schema: {
		colour:{type:"string",default:""},
	},

	init: function() {
		var data = this.data;

		this.hover = function() {
			var prevColour = this.getAttribute("material").color;
			var colour = data.colour;

			this.setAttribute("material", "color", colour);

			this.setAttribute("hover", "colour: " + prevColour);
		}

		this.el.addEventListener('mouseenter', this.hover);
		this.el.addEventListener('mouseleave', this.hover);
	},
	remove: function() {
		this.el.removeEventListener('mouseenter', this.hover);
		this.el.removeEventListener('mouseleave', this.hover);
	}
})