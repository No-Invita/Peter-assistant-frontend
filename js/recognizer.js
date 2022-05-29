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
	if (texto.includes("quiero")) {
		console.log("estas son tus clases");
		// getclasses();
		handleAuthClick();
	} else {
		console.log("first");
	}
};

recognition.onstart = function (event) {
	console.log("Listo para escuchar");
};

recognition.onerror = function (event) {
	console.log(event);
	console.log("Error: " + event.error);
	console.log("Additional information: " + event.message);
};
