import { FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import FormRowContent from '../FormRowContent';

export default function RoleSection({ form }: any) {
  return (
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
  );
}
