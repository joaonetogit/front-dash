import { cn } from '@/lib/utils';
import { ISidebarMenu } from '@/types/constants/SidebarMenu';
import {
  Bars3BottomRightIcon,
  CheckBadgeIcon,
  DocumentDuplicateIcon,
  FlagIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const classesIcon = 'text-iconSidebar w-iconSidebar h-iconSidebar';

const SidebarMenu: ISidebarMenu[] = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon className={classesIcon} />,
    link: '/dashboard',
    subMenu: [
      {
        title: 'Submenu Home',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: <Bars3BottomRightIcon className={cn(classesIcon, 'rotate-90')} />,
    link: '/users',
    subMenu: [
      {
        title: 'Submenu Dashboard',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
  {
    id: 3,
    title: 'Projects',
    icon: <DocumentDuplicateIcon className={classesIcon} />,
    link: '/settings',
    subMenu: [
      {
        title: 'Submenu Projects',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
  {
    id: 4,
    title: 'Tasks',
    icon: <CheckBadgeIcon className={classesIcon} />,
    link: '/logout',
    subMenu: [
      {
        title: 'Submenu Tasks',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
  {
    id: 5,
    title: 'Reporting',
    icon: <FlagIcon className={classesIcon} />,
    link: '/logout',
    subMenu: [
      {
        title: 'Submenu Reporting',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
  {
    id: 6,
    title: 'Users',
    icon: <UsersIcon className={classesIcon} />,
    link: '/logout',
    subMenu: [
      {
        title: 'Submenu Users',
        link: '/dashboard/submenu-1',
      },
      {
        title: 'Submenu 2',
        link: '/dashboard/submenu-2',
      },
    ],
  },
];

export default SidebarMenu;
