import { Control } from 'react-hook-form';

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
  form: {
    control: Control<any>;
  };
}
