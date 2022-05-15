var synth = window.speechSynthesis;

var voices = [];

const speak = (x = " hola que tal") => {
	if (synth.speaking) {
		console.error("speechSynthesis.speaking");
		return;
	}
	var utterThis = new SpeechSynthesisUtterance(x);
	utterThis.onend = function (event) {
		console.log("SpeechSynthesisUtterance.onend");
	};
	utterThis.onerror = function (event) {
		console.error("SpeechSynthesisUtterance.onerror");
	};
	utterThis.onstart = function (event) {
		console.log("SpeechSynthesisUtterance.onstarr");
	};
	utterThis.voice = voices[1];
	utterThis.pitch = 1;
	utterThis.rate = 1;
	console.log(utterThis);
	synth.speak(utterThis);
};
