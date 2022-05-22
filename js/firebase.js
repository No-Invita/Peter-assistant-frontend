// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithRedirect,
	getRedirectResult,
	signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCiAeD2e9sOcLtg7mae_dvIh9LbinfZZ8I",
	authDomain: "elite-avatar-344815.firebaseapp.com",
	projectId: "elite-avatar-344815",
	storageBucket: "elite-avatar-344815.appspot.com",
	messagingSenderId: "210376532190",
	appId: "1:210376532190:web:626a262eff49478d28a24f",
	measurementId: "G-XBE6L1DD9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

const $login = document.querySelector("#login");
$login.addEventListener("click", () => {
	// signInWithRedirect(auth, provider);

	// getRedirectResult(auth)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access Google APIs.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;

	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		console.log(user);
	// 	})
	// 	.catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
});
