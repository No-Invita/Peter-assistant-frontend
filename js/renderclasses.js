const render = (clase, parent) => {
	const docclass = document.createElement("details");

	docclass.innerHTML = `
	<summary>${clase.summary}</summary>
	<p>${clase.description}</p>
	<p>${clase.start} \t ${clase.end} en ${clase.location}</p>
	`;
	parent.appendChild(docclass);
};

const renderClasses = (clases) => {
	const div = document.createElement("div");
	for (const clase of clases) {
		render(clase, div);
	}
	document.querySelector(".clases").style.display = "inline";
	document.querySelector(".clases").innerHTML = div.innerHTML;
};
