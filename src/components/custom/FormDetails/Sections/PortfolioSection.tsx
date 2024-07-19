import archives from '@/constants/ArchivesToUpload';
import CardUploadArchive from '../../CardUploadArchive';
import DragDropFiles from '../../DragDropFiles';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function PortfolioSection() {
	return (
		<FormMyDetailsRowContent title="Portfolio projects" supportText="Share a few snippets of your work.">
			<div className="mt-5 space-y-4 sm:mt-0">
				<DragDropFiles />
				<div className="space-y-4">
					{archives.map(archive => (
						<CardUploadArchive
							icon={archive.icon}
							progress={archive.progress}
							size={archive.size}
							title={archive.title}
							key={archive.title}
						/>
					))}
				</div>
			</div>
		</FormMyDetailsRowContent>
	);
}
