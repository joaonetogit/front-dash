'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { Form } from '../ui/Form';
import BioSection from './FormSections/BioSection';
import CountrySection from './FormSections/CountrySection';
import EmailSection from './FormSections/EmailSection';
import NameSection from './FormSections/NameSection';
import PhotoSection from './FormSections/PhotoSection';
import PortfolioSection from './FormSections/PortfolioSection';
import RoleSection from './FormSections/RoleSection';
import TimezoneSection from './FormSections/TimezoneSection';

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  timezone: z.string().min(2),
  country: z.string().min(2),
  bio: z.string().min(2),
});

type FormValues = z.infer<typeof formSchema>;

const RenderNameSection = React.memo(NameSection);
const RenderEmailSection = React.memo(EmailSection);
const RenderPhotoSection = React.memo(PhotoSection);
const RenderRoleSection = React.memo(RoleSection);
const RenderCountrySection = React.memo(CountrySection);
const RenderTimezoneSection = React.memo(TimezoneSection);
const RenderBioSection = React.memo(BioSection);
const RenderPortfolioSection = React.memo(PortfolioSection);

export default function FormMyDetails() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
    },
  });

  const onSubmit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <RenderNameSection form={form} />
        <RenderEmailSection form={form} />
        <RenderPhotoSection form={form} />
        <RenderRoleSection form={form} />
        <RenderCountrySection form={form} />
        <RenderTimezoneSection form={form} />
        <RenderBioSection form={form} />
        <RenderPortfolioSection />

        <div className='flex justify-end gap-3 pt-4'>
          <Button variant='outline'>Cancel</Button>
          <Button
            type='submit'
            variant='primary'
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
