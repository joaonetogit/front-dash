import { ICardUploadArchive } from '@/types/components/CardUploadArchive';
import { TrashIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Card, CardContent } from '../ui/Card';
import { Progress } from '../ui/Progress';
import FeaturedIcon from './FeaturedIcon';

export default function CardUploadArchive({ archive }: ICardUploadArchive) {
  const isUploaded = archive.progress === 100;

  return (
    <Card
      className={`border ${isUploaded ? 'border-violet-500' : 'border-border'} p-4 shadow-none`}
    >
      <CardContent className='flex gap-4 p-0'>
        <FeaturedIcon
          icon={archive.icon}
          variant='primary'
        />
        <div className='flex-1'>
          <p className='text-sm font-medium text-zinc-700 sm:text-base'>{archive.title}</p>
          <p className='text-sm text-zinc-500 sm:text-base'>{archive.size}</p>
          <div className='flex items-center gap-3'>
            <Progress
              value={archive.progress}
              barColor='bg-violet-600'
            />
            <p className='text-sm font-medium text-zinc-700'>{archive.progress}%</p>
          </div>
        </div>
        <button
          type='button'
          className='h-fit'
        >
          {isUploaded ? (
            <CheckCircleIcon className='size-5 fill-violet-600' />
          ) : (
            <TrashIcon className='size-5 text-zinc-500' />
          )}
        </button>
      </CardContent>
    </Card>
  );
}
