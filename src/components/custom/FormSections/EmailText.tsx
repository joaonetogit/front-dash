import { Input } from '@/components/ui/Input';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import FormRowContent from '../FormRowContent';

export default function EmailText() {
  return (
    <FormRowContent title='Email address'>
      <Input
        type='email'
        id='email'
        placeholder='Your best e-mail'
        icon={<EnvelopeIcon className='size-4 text-zinc-700' />}
      />
    </FormRowContent>
  );
}
