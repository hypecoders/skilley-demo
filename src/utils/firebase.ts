import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';
// import {
// 	collection,
// 	CollectionReference,
// 	doc,
// 	DocumentReference,
// 	getFirestore
// } from 'firebase/firestore';

initializeApp({
	apiKey: 'AIzaSyAnL_jqyP95HUVN43L5rwGtjmUV3NGfhQg',
	authDomain: 'skilley-demo.firebaseapp.com',
	projectId: 'skilley-demo',
	storageBucket: 'skilley-demo.appspot.com',
	messagingSenderId: '393123766788',
	appId: '1:393123766788:web:18f79565d1f04059d50b51'
});

/**
 * AUTHENTICATION
 */

const auth = getAuth();

// Sign Up handler
export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

// Sign In handler
export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

// Sign Out handler
export const signOut = () => authSignOut(auth);

// Subscribe to auth state changes
export const onAuthChanged = (callback: (u: User | null) => void) =>
	onAuthStateChanged(auth, callback);

/**
 * FIRESTORE
 */

// const db = getFirestore();
