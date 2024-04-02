let btn = document.querySelector(".button");
let senha = document.querySelector(".senha-input");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	console.log(senha.value);

	if (senha.value == "080722") {
		window.location.href = "./pedido.html";
	} else {
		Swal.fire({
			title: "Errou... 😢",
			html: "Tenta novamente!",
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector("b");
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log("I was closed by the timer");
			}
		});
	}
});
