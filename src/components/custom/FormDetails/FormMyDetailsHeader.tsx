import { IChildren } from '@/types/base';
import { Separator } from '../../ui/Separator';

export default function FormMyDetailsHeader({ children }: IChildren) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
          <p className='text-sm text-zinc-700'>Update your photo and personal details here.</p>
        </div>
        {children}
      </div>
      <Separator className='mt-5' />
    </div>
  );
}
