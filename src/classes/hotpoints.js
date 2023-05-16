/*
	Development build version: 0.1
	Build date: 02/03/2023
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
			sky.setAttribute("src", newSky);
				
			const root = document.getElementById("blocks");
			root.innerHTML = "";

			const loading = document.getElementById("loading");
			loading.setAttribute("visible", true);

			var pathList = newSky.split("/");
			const location = document.getElementById("location");
			location.setAttribute("text", "value: " + pathList[pathList.length - 2]);

			getData(newSky);
		}

		this.main = function() {
			this.setSky;
		}
		// Clean up add signle addEventListener to main - 
		this.el.addEventListener('click', this.setSky);

	},
	update: function() {},
	remove: function() {
		this.el.removeEventListener('click', this.setSky);
	}
})