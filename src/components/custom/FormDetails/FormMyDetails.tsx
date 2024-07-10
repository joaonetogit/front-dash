'use client';

import useFormMyDetails from '@/hooks/useFormMyDetails';
import { memo } from 'react';
import { Form } from '../../ui/Form';
import FormMyDetailsFooter from './FormMyDetailsFooter';
import FormMyDetailsHeader from './FormMyDetailsHeader';
import BioSection from './Sections/BioSection';
import CountrySection from './Sections/CountrySection';
import EmailSection from './Sections/EmailSection';
import NameSection from './Sections/NameSection';
import PhotoSection from './Sections/PhotoSection';
import PortfolioSection from './Sections/PortfolioSection';
import RoleSection from './Sections/RoleSection';
import TimezoneSection from './Sections/TimezoneSection';

const RenderHeader = memo(FormMyDetailsHeader);
const RenderNameSection = memo(NameSection);
const RenderEmailSection = memo(EmailSection);
const RenderPhotoSection = memo(PhotoSection);
const RenderRoleSection = memo(RoleSection);
const RenderCountrySection = memo(CountrySection);
const RenderTimezoneSection = memo(TimezoneSection);
const RenderBioSection = memo(BioSection);
const RenderPortfolioSection = memo(PortfolioSection);
const RenderFooter = memo(FormMyDetailsFooter);

export default function FormMyDetails() {
  const { form, onSubmit } = useFormMyDetails();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <RenderHeader />
        <RenderNameSection form={form} />
        <RenderEmailSection form={form} />
        <RenderPhotoSection form={form} />
        <RenderRoleSection form={form} />
        <RenderCountrySection form={form} />
        <RenderTimezoneSection form={form} />
        <RenderBioSection form={form} />
        <RenderPortfolioSection />
        <RenderFooter />
      </form>
    </Form>
  );
}
