async function getclasses() {
	handleAuthClick();
	const req = await fetch("https://peter-assistant.herokuapp.com/");
	const res = await req.json();
	console.log(res);
	renderClasses(res);
}

// getclasses();
