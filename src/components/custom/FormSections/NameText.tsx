import { Input } from '@/components/ui/Input';
import FormRowContent from '../FormRowContent';

export default function NameText() {
  return (
    <FormRowContent title='Name'>
      <div className='flex w-full items-center gap-4'>
        <div className='flex-1'>
          <Input
            type='text'
            id='firstName'
            placeholder='First Name'
          />
        </div>
        <div className='flex-1'>
          <Input
            type='text'
            id='lastName'
            placeholder='Last Name'
          />
        </div>
      </div>
    </FormRowContent>
  );
}
