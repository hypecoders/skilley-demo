import { Timestamp } from '@firebase/firestore';

/* Users */

export type UserData = {
	uid: string;
	firstName: string;
	lastName: string;
	locations: string[];
	skills: string[];
	icon?: string;
	background?: string;
	accountType: Role;
};

/* Roles */

export enum Role {
	RECRUITER = 'RECRUITER',
	APPLICANT = 'APPLICANT'
}

export type RoleData = {
	accountType: Role;
};

/* Tests */

export type Question = {
	number: number;
	title: string;
	description: string;
	type: 'singleLine' | 'multiLine' | 'radioOpt' | 'checkboxOpt';
	singleAnswer?: string;
	multiAnswer?: string[];
	justification?: string;
};

export type TestData = {
	title: string;
	created: Timestamp;
	modified: Timestamp;
	conductor: string;
	closingRule: 'manual' | 'limit' | 'date';
	status: 'active' | 'draft' | 'finished';
	messages: {
		privacy: string;
		welcome: string;
		thanks: string;
		closed: string;
	};
	questionIntro: {
		title: string;
		message: string;
	};
	questions: Question[];
	participants: string[];
	branding: {
		primary: string;
		secondary: string;
	};
};

export const Locations = [
	{ value: 'slovakia', label: 'Slovakia' },
	{ value: 'czechia', label: 'Czech Republic' },
	{ value: 'remote', label: 'Remote' }
];
