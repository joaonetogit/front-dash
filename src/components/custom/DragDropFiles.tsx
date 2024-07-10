import useDragDropFiles from '@/hooks/useDragDropFiles';
import { IDragDropFiles } from '@/types/components/DragDropFiles';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import FeaturedIcon from './FeaturedIcon';

export default function DragDropFiles({ onFileSelect }: IDragDropFiles) {
  const { handleFileChange } = useDragDropFiles(onFileSelect);

  return (
    <div className='relative h-full w-full flex-1 rounded-md border border-[#EAECF0] px-6 py-4'>
      <input
        type='file'
        aria-label='Upload file input'
        className='absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0'
        onChange={handleFileChange}
      />
      <div className='flex cursor-pointer flex-col items-center justify-center gap-3'>
        <FeaturedIcon icon={<CloudArrowUpIcon />} />
        <div className='flex flex-col items-center justify-center gap-1 text-sm text-zinc-500'>
          <p>
            <span className='font-semibold text-violet-700'>Click to upload</span> or drag and drop
          </p>
          <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>
      </div>
    </div>
  );
}
