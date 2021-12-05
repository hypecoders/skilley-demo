import firebaseErrorCodes from '../common/firebaseErrorCodes';

export type FirebaseErrorCode = keyof typeof firebaseErrorCodes;

export const useFirebaseError = () => (key: FirebaseErrorCode) =>
	firebaseErrorCodes[key];
