const render = (clase, parent) => {
	const docclass = document.createElement("details");
	docclass.open = true;

	docclass.innerHTML = `
	<summary>${clase.summary}</summary>
	<p>${clase.description}\n</p>
	<p>
	${clase.start} a  ${clase.end} en ${clase.location}\n
	</p>
	<a href="./map/localized.html"  class="link" target="iframe_a"
		>Llevame ahí</a
	>
	<p id="location" style="display = none;">${clase.location}</p>
	</p>
	`;
	docclass.querySelector(".link").addEventListener("click", function (e) {
		e.preventDefault();
		console.log(e.target);
		displayframe();
	});
	let li = document.createElement("li");
	li.appendChild(docclass);
	parent.appendChild(li);
};

const renderClasses = (clases) => {
	document.getElementById("title").innerText = "Estas son tus clases";
	speak("Estas son tus clases");
	const div = document.createElement("div");
	for (const clase of clases) {
		render(clase, div);
	}
	document.querySelector(".clases").style.display = "block";
	document.querySelector(".clases").innerHTML = div.innerHTML;
	addListeners();
};
