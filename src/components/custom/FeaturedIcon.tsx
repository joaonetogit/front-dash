import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function FeaturedIcon() {
  return (
    <div className='flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-[#F9FAFB]'>
      <div className='flex h-full w-full items-center justify-center rounded-full bg-[#F2F4F7]'>
        <CloudArrowUpIcon className='size-5 text-[#475467]' />
      </div>
    </div>
  );
}
