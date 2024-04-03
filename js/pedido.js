var btn = document.querySelector(".no");
var position = 0;



// var isAnimating = false;
// btn.addEventListener("click", function () {
// 	if (!isAnimating) {
// 		isAnimating = true;
// 		position = position === 0 ? 150 : 0;
// 		btn.style.transform = `translate(0px, ${position}px)`;
// 		btn.style.transition = "all 0.2s ease";

// 		setTimeout(function () {
// 			isAnimating = false;
// 		}, 200);
// 	}
// });



btn.addEventListener("click", function () {
	position ? (position = 0) : (position = 150);
	btn.style.transform = `translate(${position}px,0px)`;
	btn.style.transition = "all 1.5s ease";
});

btn.addEventListener("mouseover", function () {
	if (!isAnimating) {
		isAnimating = true;
		position = position === 0 ? 150 : 0;
		btn.style.transform = `translate(0px, ${position}px)`;
		btn.style.transition = "all 0.2s ease";

		setTimeout(function () {
			isAnimating = false;
		}, 200);
	}
});

const sim = document.getElementById("yes");

sim.addEventListener("click", () => {
	let timerInterval;
	Swal.fire({
		title: "Te amo muito!!! 😍",
		html: "Vamos ser os lindinhos mais lindos do mundo 💘",
		timer: 4000,
		timerProgressBar: true,
		didOpen: () => {
			// Swal.showLoading();
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
});
