function fadeOutEffect() {
	var body = document.getElementsByTagName("body")[0];
	var fadeOut = setInterval(function () {
		if (!body.style.opacity) {
			body.style.opacity = 1;
		}
		if (body.style.opacity > 0) {
			body.style.opacity -= 0.01;
		} else {
			clearInterval(fadeOut);
			window.location.href = "codigo.html";
		}
	}, 40);
}

setTimeout(function () {
	fadeOutEffect();
}, 2000);
