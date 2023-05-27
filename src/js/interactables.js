function getData(location) {
	$.ajax({
		url: "/requestdata",
		type: "get",
		data: {loc: location},
	})
	.done(function(json) {
		const root = document.getElementById("blocks");

		const data = JSON.parse(json);

		const sky = document.getElementById("img-360");
		sky.setAttribute("src", data.img);

		const loading = document.getElementById("loading");
		loading.setAttribute("visible", false);

		for (var i = 0; i < data.hpImg.length; i++) {
			const hotpoint = document.createElement("a-image");
			hotpoint.setAttribute("class", "interactable");
			hotpoint.setAttribute("src", "#hotpoint");
			hotpoint.setAttribute("hotpoint", "room:" + data.hpImg[i]);
			hotpoint.setAttribute("position", data.hpPos[i]);
			hotpoint.setAttribute("rotation", data.hpRot[i]);
			hotpoint.setAttribute("scale", "5 5 5");

			root.appendChild(hotpoint);
		}

		for (var i = 0; i < data.infoTitle.length; i++) {
			const wrapper = document.createElement("a-entity");
			root.appendChild(wrapper);

			const infopoint = document.createElement("a-image");
			infopoint.setAttribute("class", "interactable");
			infopoint.setAttribute("src", "#informationpoint");
			infopoint.setAttribute("position", data.infoPos[i]);
			infopoint.setAttribute("look-at", "#camera");
			infopoint.setAttribute("info", "cmd:open");

			wrapper.appendChild(infopoint);

			const infodesc = document.createElement("a-image");
			infodesc.setAttribute("src", "#informationpointBackground");
			infodesc.setAttribute("position", data.infoPos[i]);
			infodesc.setAttribute("scale", "0 0 0");
			infodesc.setAttribute("look-at", "#camera");

			wrapper.appendChild(infodesc);

			for (var j = 0; j < 2; j++) {
				const text = document.createElement("a-text");
				text.setAttribute("width", "0.90");
				text.setAttribute("height", "0.60");
				text.setAttribute("scale", "1 1 1");
				text.setAttribute("baseline", "top");
				text.setAttribute("wrap-count", "25");

				if (j == 0) {
					text.setAttribute("position", "-0.43 0.38 0.10");
					text.setAttribute("value", data.infoTitle[i]);
				} else {
					text.setAttribute("position", "-0.43 0.20 0.10");
					text.setAttribute("value", data.infoDesc[i]);
				}

				infodesc.appendChild(text);
			}

			const closeBtn = document.createElement("a-image");
			closeBtn.setAttribute("class", "interactable");
			closeBtn.setAttribute("src", "#informationpointClose");
			closeBtn.setAttribute("position", "0.43 0.43 0.01");
			closeBtn.setAttribute("scale", "0.06 0.06 0.06");
			closeBtn.setAttribute("info", "cmd:close");

			infodesc.appendChild(closeBtn);
		}
	});
}

getData("img/Front-Entrance/GS__0107.JPG");