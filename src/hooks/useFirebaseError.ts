import firebaseErrorCodes from '../common/firebaseErrorCodes';

export type FBErrorCode = keyof typeof firebaseErrorCodes;

export const useFirebaseError = () => (key: FBErrorCode) =>
	firebaseErrorCodes[key];
