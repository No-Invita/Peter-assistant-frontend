const getBlock = async (block, clase) => {
	const id = document.getElementById("mail").innerHTML;
	const req = await fetch(
		"https://peter-assistant.herokuapp.com/destination?id=" +
			id +
			"&destination=" +
			block
		// "http://localhost:5000/destination?id=" + id + "&destination=" + block
	);
	const response = await req.json();
	console.log(response);
};
