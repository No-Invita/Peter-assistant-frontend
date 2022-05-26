const render = (clase, parent) => {
	const docclass = document.createElement("details");
	docclass.open = true;

	docclass.innerHTML = `
	<summary>${clase.summary}</summary>
	<p>${clase.description}</p>
	<p>${clase.start} \t ${clase.end} en ${clase.location}</p>
	<p>
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
	parent.appendChild(docclass);
};

const renderClasses = (clases) => {
	const div = document.createElement("div");
	for (const clase of clases) {
		render(clase, div);
	}
	document.querySelector(".clases").style.display = "inline";
	document.querySelector(".clases").innerHTML = div.innerHTML;
	addListeners();
};
