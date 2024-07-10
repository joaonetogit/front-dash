import formSchema from '@/constants/FormSchema';
import { z } from 'zod';

export type FormValues = z.infer<typeof formSchema>;
