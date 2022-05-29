const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert(
			"Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
		);
	}

	const $enlace = document.querySelector("#enlace");
	$frame = document.querySelector("#frame");

	const onUbicacionConcedida = (ubicacion) => {
		console.log("Tengo la ubicación: ", ubicacion);
		const coordenadas = ubicacion.coords;
		(async () => {
			const rawResponse = await fetch(
				"https://peter-assistant.herokuapp.com/location",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						mode: "no-cors",
					},
					body: JSON.stringify({
						latitude: coordenadas.latitude,
						longitude: coordenadas.longitude,
					}),
				}
			);
			const content = await rawResponse.json();

			console.log(content);
		})();

		// $enlace.href = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
	};
	const onErrorDeUbicacion = (err) => {
		console.log("Error obteniendo ubicación: ", err);
	};

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000, // Esperar solo 5 segundos
	};

	navigator.geolocation.getCurrentPosition(
		onUbicacionConcedida,
		onErrorDeUbicacion,
		opcionesDeSolicitud
	);
	// speak("para iniciar el programa da click sobre Peter");
	alert("Para iniciar el programa da click sobre Peter");
};
