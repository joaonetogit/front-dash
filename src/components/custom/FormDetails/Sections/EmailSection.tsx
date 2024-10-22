import { FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import type { IForm } from '@/types/base';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function EmailSection({ form }: IForm) {
	return (
		<FormMyDetailsRowContent title="Email address">
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem className="flex-1">
						<div className="mt-5 sm:mt-0">
							<Input
								type="email"
								id="email"
								placeholder="Your best e-mail"
								icon={<EnvelopeIcon className="size-4 text-zinc-700" />}
								{...field}
							/>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>
		</FormMyDetailsRowContent>
	);
}
