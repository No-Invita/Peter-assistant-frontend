const $peter = document.getElementById("peter");

peter.addEventListener("click", function () {
	speakAndListen("Hola, ¿Qué tal?, ¿Quieres saber cual es tu proxima clase?");
});

document.addEventListener("DOMContentLoaded", function () {
	funcionInit();
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
			displayframe();
			console.log(
				e.target.parentNode.parentNode
					.querySelector("#location")
					.innerText.split(" ")[0]
			);
			getBlock(
				e.target.parentNode.parentNode
					.querySelector("#location")
					.innerText.split(" ")[0]
			);
		});
	}
}

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log("Name: " + profile.getName());
	console.log("Image URL: " + profile.getImageUrl());
	console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
	var id_token = googleUser.getAuthResponse().id_token;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:5000/x");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onload = function () {
		console.log("Signed in as: " + xhr.responseText);
	};
	xhr.send("idtoken=" + id_token);
}
