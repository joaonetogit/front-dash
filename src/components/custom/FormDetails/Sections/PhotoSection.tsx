import { FormField, FormItem } from '@/components/ui/Form';
import { UserIcon } from '@heroicons/react/24/outline';
import DragDropFiles from '../../DragDropFiles';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function PhotoSection({ form }: any) {
  return (
    <FormMyDetailsRowContent
      title='Your photo'
      supportText='This will be displayed on your profile.'
    >
      <FormField
        control={form.control}
        name='email'
        render={() => (
          <FormItem className='mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:gap-4'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F5FF]'>
              <UserIcon className='size-8 text-[#7F56D9]' />
            </div>
            <DragDropFiles />
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
