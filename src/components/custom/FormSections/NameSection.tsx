import { FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import FormRowContent from '../FormRowContent';

export default function NameSection({ form }: any) {
  return (
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
  );
}
