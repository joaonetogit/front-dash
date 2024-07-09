import { FormField, FormItem, FormLabel } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function NameSection({ form }: any) {
  return (
    <FormMyDetailsRowContent hiddenTitle>
      <div className='flex w-full flex-col items-center gap-4 sm:flex-row'>
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem className='w-full flex-1 space-y-[6px]'>
              <FormLabel className='block sm:hidden'>First name</FormLabel>
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
            <FormItem className='w-full flex-1 space-y-[6px]'>
              <FormLabel className='block sm:hidden'>Last name</FormLabel>
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
    </FormMyDetailsRowContent>
  );
}