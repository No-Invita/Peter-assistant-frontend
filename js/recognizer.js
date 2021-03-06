var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
	SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var grammar = `#JSGF V1.0; grammar command; public <command> = si * proxima * ;`;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
let texto = "";
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "es";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
	console.log(event.results[0][0].transcript);
	texto = event.results[0][0].transcript;
	console.log("Confidence: " + event.results[0][0].confidence);
	if (
		texto.includes("quiero") ||
		texto.includes("quiero saber") ||
		texto.includes("si") ||
		texto.includes("sí")
	) {
		console.log("estas son tus clases");
		speak("Inicia sesion para obtener tus clases");
		// getclasses();
		handleAuthClick();
	} else {
		console.log("first");
		document.getElementById("title").innerText =
			"Disculpa no te he entendido intenta de nuevo";
		speak("Disculpa no te he entendido intenta de nuevo");
	}
};

recognition.onstart = function (event) {
	console.log("Listo para escuchar");
	document.getElementById("title").innerText = "Listo para escuchar";
};

recognition.onerror = function (event) {
	console.log(event);
	console.log("Error: " + event.error);
	console.log("Additional information: " + event.message);
};

recognition.onspeechend = function () {
	recognition.stop();
	document.getElementById("title").innerText =
		"Speech recognition has stopped.";
};
