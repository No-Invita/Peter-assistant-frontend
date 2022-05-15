document.addEventListener("DOMContentLoaded", funcionInit);

const displayframe = () => {
	document.getElementById("frame").style.display = "inline";
	console.log("first");
};

document.getElementById("link").addEventListener("click", displayframe);
