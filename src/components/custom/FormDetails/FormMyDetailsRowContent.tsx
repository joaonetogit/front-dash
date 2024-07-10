import { IFormMyDetailsRowContent } from '@/types/components/FormMyDetailsRowContent';

export default function FormMyDetailsRowContent({
  title,
  supportText,
  children,
  hiddenTitleOnMobile = false,
}: IFormMyDetailsRowContent) {
  return (
    <div className='!mt-0 w-full border-b border-border py-5'>
      <div className='flex max-w-[824px] flex-col sm:flex-row sm:justify-between sm:gap-8'>
        {(title || supportText) && (
          <div className='w-full max-w-72 flex-1 text-sm sm:text-base'>
            {title && (
              <h3
                className={`${hiddenTitleOnMobile && 'hidden sm:block'} font-medium text-zinc-700`}
              >
                {title}
              </h3>
            )}
            {supportText && <p className='text-zinc-500'>{supportText}</p>}
          </div>
        )}

        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
}
