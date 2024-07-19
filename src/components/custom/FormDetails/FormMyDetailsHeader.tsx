import { Separator } from '@/components/ui/Separator';
import FormMyDetailsActions from './FormMyDetailsActions';

export default function FormMyDetailsHeader() {
	return (
		<div>
			<div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
				<div>
					<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
					<p className="text-sm text-zinc-700">Update your photo and personal details here.</p>
				</div>
				<FormMyDetailsActions />
			</div>
			<Separator className="mt-5" />
		</div>
	);
}
