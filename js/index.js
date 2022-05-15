const $peter = document.getElementById("peter");

peter.addEventListener("click", function () {
	speak("Hola, ¿Qué tal?, ¿Quieres saber cual es tu proxima clase?");
	recognition.start();
	if (texto.includes("quiero")) {
		console.log("estas son tus clases");
	} else {
		console.log("first");
	}
});

document.addEventListener("DOMContentLoaded", funcionInit);
const displayframe = () => {
	document.getElementById("frame").style.display = "inline";
};

document.getElementById("link").addEventListener("click", displayframe);
