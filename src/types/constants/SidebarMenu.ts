import type { ReactElement } from "react";

interface ISidebarButton {
	title: string;
	link: string;
	icon: ReactElement;
}

export interface ISidebarMenu extends ISidebarButton {
	id: number;
	link: string;
	subMenu?: { title: string }[];
}

export interface ISidebarButtonsConfigs extends ISidebarButton {}
