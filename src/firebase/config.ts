import { initializeApp } from "firebase/app";
import { cache } from "react";
import { getDatabase, get, ref as dbRef, child } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

function StartFirebase() {
	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
		authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
		databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
		messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
		appId: process.env.NEXT_PUBLIC_APP_ID,
	};
	console.log(firebaseConfig);
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
