import { IFormMyDetailsRowContent } from '@/types/components/FormMyDetailsRowContent';

export default function FormMyDetailsRowContent({
  title,
  supportText,
  children,
}: IFormMyDetailsRowContent) {
  return (
    <div className='!mt-0 w-full border-b border-border py-5'>
      <div className='flex max-w-[824px] justify-between gap-8'>
        <div className='w-full max-w-72 flex-1 text-sm'>
          <h3 className='font-medium text-zinc-700'>{title}</h3>
          {supportText && <p className='text-zinc-500'>{supportText}</p>}
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
}
