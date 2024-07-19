import type { UseFormReturn } from "react-hook-form";

export interface IChildren {
	children: React.ReactNode;
}

export interface IUser {
	image: string;
	name: string;
	email: string;
	percentStorageUsed: number;
}

export interface IClassName {
	className?: string;
}

export interface IForm {
	form: UseFormReturn<
		{
			photo: File;
			firstName: string;
			lastName: string;
			email: string;
			role: string;
			timezone: string;
			country: string;
			bio: string;
		},
		unknown,
		undefined
	>;
}
