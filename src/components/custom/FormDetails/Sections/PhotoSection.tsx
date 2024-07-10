import { FormField, FormItem, FormMessage } from '@/components/ui/Form';
import usePhotoSection from '@/hooks/usePhotoSection';
import { IPhotoSection } from '@/types/components/PhotoSection';
import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import DragDropFiles from '../../DragDropFiles';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function PhotoSection({ form }: IPhotoSection) {
  const { selectedFile, handleFileSelect } = usePhotoSection(form);

  return (
    <FormMyDetailsRowContent
      title='Your photo'
      supportText='This will be displayed on your profile.'
    >
      <FormField
        control={form.control}
        name='photo'
        render={() => (
          <FormItem className='mt-5 flex flex-col gap-5 space-y-2 sm:mt-0 sm:flex-row sm:gap-4 sm:space-y-0'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F5FF]'>
              {selectedFile ? (
                <Image
                  width={64}
                  height={64}
                  src={selectedFile}
                  alt='Selected'
                  className='h-full w-full rounded-full object-cover'
                />
              ) : (
                <UserIcon className='size-8 text-[#7F56D9]' />
              )}
            </div>
            <div className='flex-1 w-full'>
              <DragDropFiles onFileSelect={handleFileSelect} />
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
