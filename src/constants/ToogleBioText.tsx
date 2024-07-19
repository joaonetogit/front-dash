import type { IDataToogleBioText } from "@/types/constants/ToogleBioText";
import { FontBoldIcon, FontItalicIcon, Link1Icon, ListBulletIcon, UnderlineIcon } from "@radix-ui/react-icons";

const DataToogleBioText: IDataToogleBioText[] = [
	{
		icon: <FontBoldIcon />,
		value: "bold",
		ariaLabel: "Toggle bold",
	},
	{
		icon: <FontItalicIcon />,
		value: "italic",
		ariaLabel: "Toggle italic",
	},
	{
		icon: <UnderlineIcon />,
		value: "underline",
		ariaLabel: "Toggle underline",
	},
	{
		icon: <Link1Icon />,
		value: "link",
		ariaLabel: "Toggle link",
	},
	{
		icon: <ListBulletIcon />,
		value: "list",
		ariaLabel: "Toggle list",
	},
] as const;

export default DataToogleBioText;
