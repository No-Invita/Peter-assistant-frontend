/**
 * makes a request to the server in order to get the block info
 * @param {*} block
 * @param {*} clase
 */
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
	speak(response.message);
	console.log(response);
};
