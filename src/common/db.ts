import { Timestamp } from '@firebase/firestore';

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

export enum Role {
	RECRUITER = 'RECRUITER',
	APPLICANT = 'APPLICANT'
}

export type RoleData = {
	accountType: Role;
};

export const Locations = [
	{ value: 'slovakia', label: 'Slovakia' },
	{ value: 'czechia', label: 'Czech Republic' },
	{ value: 'remote', label: 'Remote' }
];

export type Message = {
	createdAt: Timestamp;
	text: string;
	sender: string;
	participants: string[];
};
