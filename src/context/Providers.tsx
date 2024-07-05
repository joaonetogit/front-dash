import { IChildren } from '@/types/base';
import { UserProvider } from './UserProvider';

export default function Providers({ children }: IChildren) {
  return <UserProvider>{children}</UserProvider>;
}
