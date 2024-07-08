'use client';

import countries from '@/constants/Countries';
import timezones from '@/constants/Timezones';
import DataToogleBioText from '@/constants/ToogleBioText';
import { ClockIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { Form, FormControl, FormField, FormItem } from '../ui/Form';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup';
import DragDropFiles from './DragDropFiles';
import FormRowContent from './FormRowContent';

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  timezone: z.string().min(2),
  country: z.string().min(2),
  bio: z.string().min(2),
});

export default function FormMyDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        {/* Name */}
        <FormRowContent title='Name'>
          <div className='flex w-full items-center gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <Input
                    type='text'
                    id='firstName'
                    placeholder='First Name'
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <Input
                    type='text'
                    id='lastName'
                    placeholder='Last Name'
                    {...field}
                  />
                </FormItem>
              )}
            />
          </div>
        </FormRowContent>

        {/* Email */}
        <FormRowContent title='Email address'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <Input
                  type='email'
                  id='email'
                  placeholder='Your best e-mail'
                  icon={<EnvelopeIcon className='size-4 text-zinc-700' />}
                  {...field}
                />
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Photo */}
        <FormRowContent
          title='Your photo'
          supportText='This will be displayed on your profile.'
        >
          <FormField
            control={form.control}
            name='email'
            render={() => (
              <FormItem className='mt-0 flex gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F5FF]'>
                  <UserIcon className='size-6 text-[#7F56D9]' />
                </div>
                <DragDropFiles />
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Role */}
        <FormRowContent title='Role'>
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem>
                <Input
                  type='text'
                  id='role'
                  placeholder='Your role'
                  {...field}
                />
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Country */}
        <FormRowContent title='Country'>
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Country' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem
                        key={country.value}
                        value={country.value}
                      >
                        <div className='flex'>
                          <p className='h-5 w-5 overflow-hidden rounded-full'>{country.flag}</p>
                          <p className='font-medium text-zinc-900'>{country.name}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Timezone */}
        <FormRowContent title='Timezone'>
          <FormField
            control={form.control}
            name='timezone'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className='w-full'
                      icon={<ClockIcon className='size-4 text-[#71717A]' />}
                    >
                      <SelectValue
                        placeholder='Timezone'
                        className='text-left'
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {timezones.map(timezone => (
                      <SelectItem
                        key={timezone.utc}
                        value={timezone.utc}
                      >
                        <span className='mr-2 font-medium text-zinc-900'>{timezone.name}</span>
                        <span className='text-muted-foreground'>{timezone.utc}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Bio */}
        <FormRowContent
          title='Bio'
          supportText='Write a short introduction.'
        >
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-4'>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Normal Text' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='normal'>Normal Text</SelectItem>
                        <SelectItem value='heading-1'>Heading 1</SelectItem>
                        <SelectItem value='heading-2'>Heading 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <ToggleGroup type='multiple'>
                      {DataToogleBioText.map(item => (
                        <ToggleGroupItem
                          className='p-2 text-[#A1A1AA]'
                          key={item.value}
                          value={item.value}
                          aria-label={item.ariaLabel}
                        >
                          <div className='h-4 w-4'>{item.icon}</div>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div className='space-y-[6px]'>
                    <Textarea
                      placeholder='Type your bio here.'
                      id='message'
                      className='resize-none'
                      rows={6}
                      {...field}
                    />
                    <p className='text-sm text-muted-foreground'>275 characters left</p>
                  </div>
                </div>
              </FormItem>
            )}
          />
        </FormRowContent>

        {/* Portfolio */}
        <FormRowContent
          title='Portfolio projects'
          supportText='Share a few snippets of your work.'
        >
          <DragDropFiles />
        </FormRowContent>

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
