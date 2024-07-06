import { ReactElement } from 'react';

interface ISidebarButton {
  title: string;
  link: string;
  icon?: ReactElement;
}

export interface ISidebarMenu extends ISidebarButton {
  id: number;
  link: string;
  subMenu?: ISidebarButton[];
}

export interface ISidebarButtonsConfigs extends ISidebarButton {}
