import { initializeApp } from "firebase/app";
import { cache } from "react";
import { getDatabase, get, ref as dbRef, child } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

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
	return { db: getDatabase(app), storage: getStorage(app), storageRef };
}

const { db } = StartFirebase();

export const urlEndpoint = "https://ucarecdn.com/";

export const getData = cache(async () => {
	try {
		const snapshot = await get(child(dbRef(db), "events"));
		if (snapshot.exists()) {
			return snapshot.val();
		} else {
			console.log("No data available");
			return null;
		}
	} catch (error) {
		console.error(error);
	}
});

// Initialize Firebase
export default StartFirebase;
