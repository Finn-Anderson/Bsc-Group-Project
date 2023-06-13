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

			const xRatio = x / width;
			const yRatio = y / height;

			const posX = (1 * xRatio) + (-1 * (1 - xRatio)) + 0.25;
			const posY = ((-1 * yRatio) + (1 * (1 - yRatio))) * 0.8 - 0.1;

			const pos = posX + " " + posY + " -0.8";

			this.el.setAttribute("position", pos);
			this.el.setAttribute("scale", "0.7 0.7 0.7");
		}
	}
})