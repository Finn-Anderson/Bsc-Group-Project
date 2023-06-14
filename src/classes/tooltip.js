/*
	Project: WebXR VR Tour
	Author: Bsc Team Project Group 2023
	Description: Tooltip display
*/

AFRAME.registerComponent('tooltip', {
	init: function() {
		var timer;
		this.clicked = false;
		this.hover = false;

		const canvas = document.querySelector("canvas");

		document.addEventListener('mouseenter', (e) => {
			const list = e.target.classList;
			if (list && list.contains("interactable")) {
				timer = setTimeout( () => {
					this.hover = true;

					const self = document.querySelector('[tooltip]').components.tooltip;
					self.attachToCursor(e);
				}, 600);
			}
		});

		document.addEventListener('mouseleave', (e) => {
			const list = e.target.classList;
			if (list && list.contains("interactable")) {
				this.el.setAttribute("scale", "0 0 0");
				this.hover = false;
				clearTimeout(timer);
			}
		});

		document.addEventListener('click', (e) => {
			clearTimeout(timer);

			$(".interactable").trigger("mouseenter");
		});

		canvas.addEventListener("mousemove", this.attachToCursor.bind(this));
	},
	remove: function() {
		this.el.removeEventListener('click', this);
	},
	attachToCursor: function(e) {
		if (e.clientX) {
			this.e = e;
		} else {
			e = this.e
		}
		if (this.hover) {
			const width = e.target.offsetWidth;
			const height = e.target.offsetHeight;

			const rect = e.target.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			var fov = document.querySelector("[camera]").getAttribute("camera").fov;
			fov /= 90;

			const percX = x / width;
			const percY = y / height;
			const d = 1 * fov;
			const border = d - (d * 0.15);

			var posX = (d * percX) + (-d * (1 - percX));
			posX = Math.min(Math.max(posX, -border), border);
			posX = posX * Math.min(Math.max(fov * 1.3, 0.8), 1) + (0.2425 * fov);

			var posY = (-d * percY) + (d * (1 - percY));
			posY = Math.min(Math.max(posY, -(border - (d * 0.1))), border);
			var posY = posY * Math.min(Math.max(fov, 0.6), 0.8) - (0.1 * fov);

			const pos = posX + " " + posY + " -0.8";

			const scale = 0.7 * fov;

			this.el.setAttribute("position", pos);
			this.el.setAttribute("scale", scale + " " + scale + " " + scale);
		}
	}
})