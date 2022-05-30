const $peter = document.getElementById("peter");

peter.addEventListener("click", function () {
	speakAndListen("Hola, ¿Qué tal?, ¿Quieres saber cual es tu proxima clase?");
});

document.addEventListener("DOMContentLoaded", function () {
	// funcionInit();
	// speak("Hola, ¿Qué tal?, ¿Quieres saber cual es tu proxima clase?");
	alert("Para iniciar el programa da clik sobre Peter");
});

const displayframe = () => {
	document.getElementById("frame").style.display = "inline";
	console.log("desplegando");
};

let $links = document.getElementsByClassName("link");
console.log($links);

function addListeners() {
	for (let i = 0; i < $links.length; i++) {
		$links[i].addEventListener("click", function (e) {
			console.log(
				e.target.parentNode.parentNode
					.querySelector("#location")
					.innerText.split(" ")[0]
			);
			getBlock(
				e.target.parentNode.parentNode
					.querySelector("#location")
					.innerText.split(" ")[0]
			).finally(() => {
				displayframe();
			});
		});
	}
}
