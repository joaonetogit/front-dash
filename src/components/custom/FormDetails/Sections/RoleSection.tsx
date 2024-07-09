import { FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function RoleSection({ form }: any) {
  return (
    <FormMyDetailsRowContent title='Role'>
      <FormField
        control={form.control}
        name='role'
        render={({ field }) => (
          <FormItem className='mt-[6px] sm:mt-0'>
            <Input
              type='text'
              id='role'
              placeholder='Your role'
              {...field}
            />
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
