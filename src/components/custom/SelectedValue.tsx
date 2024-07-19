import type { ISelectedValue } from '@/types/components/SelectedValue';

export default function SelectedValue({ archive }: ISelectedValue) {
	const isArray = Array.isArray(archive);

	return (
		<>
			<span className="mr-2 font-medium text-zinc-900">{isArray ? archive[0].name : archive.name}</span>
			<span className="text-muted-foreground">{isArray ? archive[0].utc : archive.utc}</span>
		</>
	);
}
