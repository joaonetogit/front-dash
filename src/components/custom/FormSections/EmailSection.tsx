import { FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import FormRowContent from '../FormRowContent';

export default function EmailSection({ form }: any) {
  return (
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
  );
}
