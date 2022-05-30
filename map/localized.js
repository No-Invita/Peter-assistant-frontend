var map = L.map("map");

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const getcord = async (local) => {
	var identifier = localStorage.getItem("id");
	const req = await fetch(
		"https://peter-assistant.herokuapp.com/location?id=" + identifier
		// "http://localhost:5000/location?id=" + identifier
	);
	const res = await req.json();
	const cord = local;
	const bloque = res.destination;
	var control = L.Routing.control(
		L.extend(window.lrmConfig, {
			waypoints: [
				L.latLng(cord.latitude, cord.longitude), // Here go the current location
				L.latLng(bloque.latitude, bloque.longitude), // Here go the destiny location
			],
			router: L.Routing.graphHopper(
				"ef80e7e7-23d7-470c-8cef-c42f10a83d58",
				{
					urlParameters: {
						vehicle: "foot",
					},
				}
			),
			language: "en",
			geocoder: L.Control.Geocoder.nominatim(),
			routeWhileDragging: true,
			reverseWaypoints: true,
			showAlternatives: true,
			eOptions: {
				styles: [
					{ color: "black", opacity: 0.15, weight: 9 },
					{ color: "white", opacity: 0.8, weight: 6 },
					{ color: "blue", opacity: 0.5, weight: 2 },
				],
			},
		})
	).addTo(map);
	//prueba
	L.Routing.errorControl(control).addTo(map);
};
