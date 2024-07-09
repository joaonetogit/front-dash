import archives from '@/constants/ArchivesToUpload';
import CardUploadArchive from '../../CardUploadArchive';
import DragDropFiles from '../../DragDropFiles';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function PortfolioSection() {
  return (
    <FormMyDetailsRowContent
      title='Portfolio projects'
      supportText='Share a few snippets of your work.'
    >
      <div className='space-y-4'>
        <DragDropFiles />
        <div className='space-y-4'>
          {archives.map(archive => (
            <CardUploadArchive
              archive={archive}
              key={archive.title}
            />
          ))}
        </div>
      </div>
    </FormMyDetailsRowContent>
  );
}
