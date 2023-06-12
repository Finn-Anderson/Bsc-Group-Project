/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Animate interactables
*/

AFRAME.registerComponent('animate', {
	show: function() {
		this.el.emit("show");
	},
	hide: function() {
		this.el.emit("hide");
	}
})