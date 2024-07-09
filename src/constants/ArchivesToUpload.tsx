import { IArchivesToUpload } from '@/types/constants/ArchivesToUpload';
import { CloudArrowUpIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { FilmIcon } from '@heroicons/react/24/solid';

const archives: IArchivesToUpload[] = [
  {
    icon: <FilmIcon />,
    title: 'Tech design requirements.pdf',
    size: '200 KB',
    progress: 100,
  },
  {
    icon: <DocumentIcon />,
    title: 'Dashboard prototype recording.mp4',
    size: '16 MB',
    progress: 50,
  },
  {
    icon: <CloudArrowUpIcon />,
    title: 'Dashboard prototype FINAL.fig',
    size: '4.2 MB',
    progress: 50,
  },
] as const;

export default archives;
