const getBlock = async (block, clase) => {
	const id = document.getElementById("mail").innerHTML;
	const req = await fetch(
		"https://peter-assistant.herokuapp.com/destination",
		{
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				mode: "no-cors",
			},
			body: JSON.stringify({
				destination: block,
				id: id,
			}),
		}
	);
	const response = await req.json();
	console.log(response);
};
