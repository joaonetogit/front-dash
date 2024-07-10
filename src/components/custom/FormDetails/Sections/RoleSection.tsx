import { FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { IForm } from '@/types/base';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function RoleSection({ form }: IForm) {
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
            <FormMessage />
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
