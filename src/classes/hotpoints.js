/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('hotpoint', {
	schema: {
		room:{type:"string",default:""},
	},

	init: function() {
		var newSky = this.data.room;

		this.setSky = function() {
			var sky = document.querySelector('#img-360');
			sky.emit("hide");
						
			const root = document.getElementById("blocks");
			root.innerHTML = "";

			const loading = document.getElementById("loading");
			loading.setAttribute("visible", true);

			getData(newSky);
		}

		this.el.addEventListener('click', this.setSky);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setSky);
	},
	clear: function(newSky) {
		if (newSky != "") {
			var sky = document.querySelector('#img-360');
			sky.setAttribute("src", newSky);

			var nav = document.querySelector('[nav]').components.nav;
			nav.curLoc(newSky);

			sky.emit("show");
		}
	}
})