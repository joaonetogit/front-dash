/* eslint-disable no-console */
import formSchema from '@/constants/FormSchema';
import { FormValues } from '@/types/components/FormMyDetails';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export default function useFormMyDetails() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      timezone: '',
      country: '',
      bio: '',
    },
  });

  const onSubmit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return { form, onSubmit };
}
