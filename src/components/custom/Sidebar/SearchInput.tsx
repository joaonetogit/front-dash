import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "../../ui/Input";

export default function SearchInput() {
	return (
		<div className="hidden sm:block">
			<Input
				className="shadow-searchInput px-[16.5px] py-[14.5px] pl-[39.5px]"
				placeholder="Search"
				icon={<MagnifyingGlassIcon className="size-4 text-zinc-700" />}
			/>
		</div>
	);
}
