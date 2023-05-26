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
		var nav;

		this.el.addEventListener("loaded", evt => {
			nav = document.querySelector('[nav]').components.nav;
		});

		this.setSky = function() {
			var sky = document.querySelector('#img-360');
			sky.setAttribute("src", newSky);
				
			const root = document.getElementById("blocks");
			root.innerHTML = "";

			const loading = document.getElementById("loading");
			loading.setAttribute("visible", true);

			nav.curLoc(newSky);

			getData(newSky);
		}

		this.el.addEventListener('click', this.setSky);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setSky);
	}
})