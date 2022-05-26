const getBlock = async (block, clase) => {
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
			}),
		}
	);
	const response = await req.json();
	console.log(response);
};
