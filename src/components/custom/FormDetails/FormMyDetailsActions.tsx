import { Button } from '@/components/ui/Button';
import cn from '@/lib/utils';
import type { IFormMyDetailsActions } from '@/types/components/FormMyDetailsActions';

export default function FormMyDetailsActions({ className }: IFormMyDetailsActions) {
	return (
		<div className={cn('flex gap-3 sm:justify-end', className)}>
			<Button variant="outline">Cancel</Button>
			<Button type="submit" name="action" value="save" variant="primary">
				Save
			</Button>
		</div>
	);
}
