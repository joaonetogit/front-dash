import { Button } from '@/components/ui/Button';

export default function FormMyDetailsActions() {
  return (
    <div className='flex gap-3 sm:justify-end'>
      <Button variant='outline'>Cancel</Button>
      <Button
        type='submit'
        name='action'
        value='save'
        variant='primary'
      >
        Save
      </Button>
    </div>
  );
}
