import { Button } from '@/components/ui/Button';

export default function FormMyDetailsActions() {
  return (
    <div className='flex justify-end gap-3'>
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
