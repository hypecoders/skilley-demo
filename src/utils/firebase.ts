import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';
import {
	arrayRemove,
	arrayUnion,
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getDoc,
	getFirestore,
	setDoc,
	updateDoc
} from 'firebase/firestore';

import { Question, TestData, Message, RoleData, UserData } from '../common/db';

initializeApp({
	apiKey: 'AIzaSyAnL_jqyP95HUVN43L5rwGtjmUV3NGfhQg',
	authDomain: 'skilley-demo.firebaseapp.com',
	projectId: 'skilley-demo',
	storageBucket: 'skilley-demo.appspot.com',
	messagingSenderId: '393123766788',
	appId: '1:393123766788:web:18f79565d1f04059d50b51'
});

/* AUTHENTICATION */

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

/* FIRESTORE */

const db = getFirestore();

// User data
export const usersDataDoc = (uid: string) =>
	doc(db, 'usersData', uid) as DocumentReference<UserData>;

export const usersDataCollection = collection(
	db,
	'usersData'
) as CollectionReference<UserData>;

export const getUserData = (id: string) => getDoc(usersDataDoc(id));

// Roles data
export const rolesDoc = (uid: string) =>
	doc(db, 'roles', uid) as DocumentReference<RoleData>;

export const rolesCollection = collection(
	db,
	'roles'
) as CollectionReference<RoleData>;

export const getRole = (id: string) => getDoc(rolesDoc(id));

// Test data
export const testsDoc = (id: string) =>
	doc(db, 'tests', id) as DocumentReference<TestData>;

export const getTestData = (testId: string) => getDoc(testsDoc(testId));
export const setTestData = (testId: string, payload: TestData) =>
	setDoc(testsDoc(testId), payload);
export const updateTestData = (testId: string, payload: Partial<TestData>) =>
	updateDoc(testsDoc(testId), payload);
export const addQuestionToTest = (testId: string, question: Question) =>
	updateDoc(testsDoc(testId), {
		questions: arrayUnion(question)
	});
export const removeQuestionFromTest = (testId: string, question: Question) =>
	updateDoc(testsDoc(testId), {
		questions: arrayRemove(question)
	});
// messages
export const messageDoc = () =>
	doc(db, 'messages') as DocumentReference<Message>;

export const messagesCollection = collection(
	db,
	'messages'
) as CollectionReference<Message>;
