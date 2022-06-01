var synth = window.speechSynthesis;

var voices = [];
/**
 * speaks the text
 * @param {*} x
 * @returns
 */
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
		console.log(event);
	};
	utterThis.onstart = function (event) {
		console.log("SpeechSynthesisUtterance.onstarr");
	};
	utterThis.voice = voices[1];
	utterThis.pitch = 1;
	utterThis.rate = 1;
	console.log(utterThis);
	console.log(synth);
	synth.speak(utterThis);
};
/**
 * speaks the text and listens for the user to say it
 * @param {*} x
 * @returns
 */
const speakAndListen = (x = " hola que tal") => {
	if (synth.speaking) {
		console.error("speechSynthesis.speaking");
		return;
	}
	var utterThis = new SpeechSynthesisUtterance(x);
	utterThis.onend = function (event) {
		console.log("SpeechSynthesisUtterance.onend");
		recognition.start();
	};
	utterThis.onerror = function (event) {
		console.error("SpeechSynthesisUtterance.onerror");
		console.log(event);
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
