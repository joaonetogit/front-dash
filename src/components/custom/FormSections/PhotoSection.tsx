import { FormField, FormItem } from '@/components/ui/Form';
import { UserIcon } from '@heroicons/react/24/outline';
import DragDropFiles from '../DragDropFiles';
import FormRowContent from '../FormRowContent';

export default function PhotoSection({ form }: any) {
  return (
    <FormRowContent
      title='Your photo'
      supportText='This will be displayed on your profile.'
    >
      <FormField
        control={form.control}
        name='email'
        render={() => (
          <FormItem className='mt-0 flex gap-4'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F5FF]'>
              <UserIcon className='size-6 text-[#7F56D9]' />
            </div>
            <DragDropFiles />
          </FormItem>
        )}
      />
    </FormRowContent>
  );
}
