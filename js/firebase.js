// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID =
	"210376532190-j5kv75rb4f3h3ulir579n1g4p8u7d1ii.apps.googleusercontent.com";
const API_KEY = "AIzaSyCiAeD2e9sOcLtg7mae_dvIh9LbinfZZ8I";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
	"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
	gapi.load("client", intializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function intializeGapiClient() {
	await gapi.client.init({
		apiKey: API_KEY,
		discoveryDocs: [DISCOVERY_DOC],
	});
	gapiInited = true;
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
	tokenClient = google.accounts.oauth2.initTokenClient({
		client_id: CLIENT_ID,
		scope: SCOPES,
		callback: "", // defined later
	});
	gisInited = true;
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
	tokenClient.callback = async (resp) => {
		if (resp.error !== undefined) {
			throw resp;
		}
		await listUpcomingEvents();
	};

	if (gapi.client.getToken() === null) {
		// Prompt the user to select a Google Account and ask for consent to share their data
		// when establishing a new session.
		tokenClient.requestAccessToken({ prompt: "consent" });
	} else {
		// Skip display of account chooser and consent dialog for an existing session.
		tokenClient.requestAccessToken({ prompt: "" });
	}
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
	const token = gapi.client.getToken();
	if (token !== null) {
		google.accounts.oauth2.revoke(token.access_token);
		gapi.client.setToken("");
	}
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
async function listUpcomingEvents() {
	let response;
	try {
		let date = new Date().toISOString().split("T")[0] + "T05:00:00Z";
		mañana =
			new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
				.toISOString()
				.split("T")[0] + "T05:00:00Z";
		const request = {
			calendarId: "primary",
			timeMin: date,
			timeMax: mañana,
			showDeleted: false,
			singleEvents: true,
			// maxResults: 10,
			orderBy: "startTime",
		};
		response = await gapi.client.calendar.events.list(request);
	} catch (err) {
		alert(err.message);
		return;
	}

	saveID();
	const events = response.result.items;
	console.log(events);
	(async () => {
		const req = await fetch("https://peter-assistant.herokuapp.com/event", {
			// const req = await fetch("http://localhost:5000/event", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				mode: "no-cors",
			},
			body: JSON.stringify({
				events: events,
			}),
		});
		const response = await req.json();
		renderClasses(response);
	})();

	function saveID() {
		const mail = document.createElement("div");
		mail.id = "mail";
		mail.style.display = "none";
		mail.innerHTML = response.result.summary.split("@")[0];
		localStorage.setItem("id", response.result.summary.split("@")[0]);
		document.body.appendChild(mail);
	}
}
