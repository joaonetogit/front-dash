import type { IArchivesToUpload } from '@/types/constants/ArchivesToUpload';
import { CloudArrowUpIcon, DocumentIcon, FilmIcon } from '@heroicons/react/24/outline';

const archives: IArchivesToUpload[] = [
	{
		icon: <DocumentIcon />,
		title: 'Tech design requirements.pdf',
		size: '200 KB',
		progress: 100,
	},
	{
		icon: <FilmIcon />,
		title: 'Dashboard prototype recording.mp4',
		size: '16 MB',
		progress: 40,
	},
	{
		icon: <CloudArrowUpIcon />,
		title: 'Dashboard prototype FINAL.fig',
		size: '4.2 MB',
		progress: 80,
	},
] as const;

export default archives;
