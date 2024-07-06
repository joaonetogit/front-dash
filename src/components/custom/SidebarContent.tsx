import { IChildren } from '@/types/base';

export default function SidebarContent({ children }: IChildren) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
