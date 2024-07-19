import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import type { IForm } from '@/types/base';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function NameSection({ form }: IForm) {
	return (
		<FormMyDetailsRowContent title="Name" hiddenTitleOnMobile>
			<div className="flex w-full flex-col items-center gap-5 sm:flex-row">
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="w-full flex-1 space-y-[6px]">
							<FormLabel className="block sm:hidden">First name</FormLabel>
							<Input type="text" id="firstName" placeholder="First Name" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="w-full flex-1 space-y-[6px]">
							<FormLabel className="block sm:hidden">Last name</FormLabel>
							<Input type="text" id="lastName" placeholder="Last Name" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</FormMyDetailsRowContent>
	);
}
