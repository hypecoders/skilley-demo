export type UserData = {
	uid: string;
	firstName: string;
	lastName: string;
	locations: string[];
	skills?: string[];
	icon?: string;
	background?: string;
	accountType?: Role;
};

export enum Role {
	RECRUITER = 'RECRUITER',
	APPLICANT = 'APPLICANT'
}

export type RoleData = {
	accountType: Role;
};
