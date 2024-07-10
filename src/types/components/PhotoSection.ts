import { UseFormReturn } from 'react-hook-form';

export interface IPhotoSection {
  form: UseFormReturn<{
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    timezone: string;
    country: string;
    bio: string;
    photo: File;
  }>;
}
