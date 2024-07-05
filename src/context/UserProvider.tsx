'use client';

import { IUser } from '@/types/base';
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface UserContextProps {
  user: IUser | null;
  handleLogout: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  handleLogout: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>({
    image: 'https://mui.com/static/images/avatar/3.jpg',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
  });

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, handleLogout }), [user, handleLogout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = (): UserContextProps => useContext(UserContext);
