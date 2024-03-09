import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function StartFirebase() {
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_DATABASE_URL,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
		appId: process.env.REACT_APP_APP_ID,
	};
	const app = initializeApp(firebaseConfig);
	const storageRef = ref;
	return [getDatabase(app), getStorage(app), storageRef];
}
export const urlEndpoint = "https://ucarecdn.com/";

// Initialize Firebase
export default StartFirebase;
