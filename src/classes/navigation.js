/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Info point card display
*/

AFRAME.registerComponent('nav', {
	schema: {
		cmd:{type:"string",default:""},
	},

	init: function() {
		var command = this.data.cmd;

		var dropdown = document.querySelector('#dropdown');
		var locationImg = document.getElementById("locationImg");

		function displayNav() {
			dropdown.setAttribute("scale", "1 1 1");
			locationImg.setAttribute("scale", "0 0 0");
		}

		function hideNav() {
			dropdown.setAttribute("scale", "0 0 0");
			locationImg.setAttribute("scale", "1 1 1");
		}

		this.setNav = function() {
			if (command == "close") {
				hideNav();
			} else if (command == "open") {
				displayNav();

				var curLoc = document.querySelector('[selected]');
				var name = curLoc.className;

				var switchFloor = document.getElementById("switch");

				if (name == "top-floor") {
					switchFloor.setAttribute("topFloor", false);
					switchFloor.click();
				} else {
					switchFloor.setAttribute("topFloor", true);
					switchFloor.click();
				}
			}
		}
		this.el.addEventListener('click', this.setNav);
	},
	remove: function() {
		this.el.removeEventListener('click', this.setNav);
	},
	curLoc: function(newSky) {
		var pathList = newSky.split("/");

		var curLoc = document.querySelector('[selected]');
		var newLoc = document.getElementById(pathList[pathList.length - 2]);

		if (curLoc != newLoc) {
			if (curLoc) {
				curLoc.removeAttribute("selected");
				var curChilds = curLoc.children;

				for (const el of curChilds) {
					if (!el.nextElementSibling) {
						el.setAttribute("text", "color: #000");
					} else {
						el.setAttribute("material", "color: #FFF");
					}
				}
			}

			newLoc.setAttribute("selected");
			var newChilds = newLoc.children;

			for (const el of newChilds) {
				if (!el.nextElementSibling) {
					el.setAttribute("text", "color: #FFF");
				} else {
					el.setAttribute("material", "color: #7655D2");
				}
			}
		}
	}
})
