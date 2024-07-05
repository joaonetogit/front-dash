import { ReactElement } from 'react';

interface ISidebarSubmenu {
  title: string;
  link: string;
}

export interface ISidebarMenu {
  id: number;
  title: string;
  icon: ReactElement;
  link: string;
  subMenu?: ISidebarSubmenu[];
}
