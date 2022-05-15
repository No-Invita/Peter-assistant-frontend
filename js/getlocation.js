const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert(
			"Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
		);
	}

	const $latitud = document.querySelector("#latitud"),
		$longitud = document.querySelector("#longitud"),
		$enlace = document.querySelector("#enlace");
	$frame = document.querySelector("#frame");

	const onUbicacionConcedida = (ubicacion) => {
		console.log("Tengo la ubicación: ", ubicacion);
		const coordenadas = ubicacion.coords;
		$latitud.innerText = coordenadas.latitude;
		$longitud.innerText = coordenadas.longitude;
		(async () => {
			const rawResponse = await fetch("http://localhost:5000/location", {
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
			});
			const content = await rawResponse.json();

			console.log(content);
		})();

		$enlace.href = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
		$frame.src = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
	};
	const onErrorDeUbicacion = (err) => {
		$latitud.innerText = "Error obteniendo ubicación: " + err.message;
		$longitud.innerText = "Error obteniendo ubicación: " + err.message;
		console.log("Error obteniendo ubicación: ", err);
	};

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000, // Esperar solo 5 segundos
	};

	$latitud.innerText = "Cargando...";
	$longitud.innerText = "Cargando...";
	navigator.geolocation.getCurrentPosition(
		onUbicacionConcedida,
		onErrorDeUbicacion,
		opcionesDeSolicitud
	);
};
