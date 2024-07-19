import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import countries from "@/constants/Countries";
import type { IForm } from "@/types/base";
import FormMyDetailsRowContent from "../FormMyDetailsRowContent";

export default function CountrySection({ form }: IForm) {
	return (
		<FormMyDetailsRowContent title="Country">
			<FormField
				control={form.control}
				name="country"
				render={({ field }) => (
					<FormItem className="mt-[6px] sm:mt-0">
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger className="w-full" aria-label="Select country">
									<SelectValue placeholder={`${countries[0].flag} ${countries[0].name}`} />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{countries.map(country => (
									<SelectItem key={country.value} value={country.value}>
										<div className="flex">
											<p className="h-5 w-5 overflow-hidden rounded-full">{country.flag}</p>
											<p className="font-medium text-zinc-900">{country.name}</p>
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</FormMyDetailsRowContent>
	);
}
