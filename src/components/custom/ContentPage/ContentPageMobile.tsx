'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import DataTabsList from '@/constants/TabsList';
import { Fragment, useState } from 'react';

export default function ContentPageMobile() {
	const [selectedValue, setSelectedValue] = useState(DataTabsList[0].text);

	return (
		<div className="mt-8 block space-y-8 sm:hidden">
			<Select onValueChange={value => setSelectedValue(value)}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={DataTabsList[0].text} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{DataTabsList.map(tab => (
							<SelectItem key={tab.text} value={tab.text}>
								{tab.text}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>

			{DataTabsList.map(tab => tab.text === selectedValue && <Fragment key={tab.text}>{tab.component}</Fragment>)}
		</div>
	);
}
