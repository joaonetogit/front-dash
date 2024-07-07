import { Input } from '@/components/ui/Input';
import FormRowContent from '../FormRowContent';

export default function RoleText() {
  return (
    <FormRowContent title='Role'>
      <Input
        type='text'
        id='role'
        placeholder='Your role'
      />
    </FormRowContent>
  );
}
