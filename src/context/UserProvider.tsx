'use client';

import { IChildren, IUser } from '@/types/base';
import { IUserContextProps } from '@/types/context/User';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const UserContext = createContext<IUserContextProps>({
  user: null,
  handleLogout: () => {},
});

export function UserProvider({ children }: IChildren) {
  const [user, setUser] = useState<IUser | null>({
    image: 'https://mui.com/static/images/avatar/3.jpg',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    percentStorageUsed: 80,
  });

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, handleLogout }), [user, handleLogout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = (): IUserContextProps => useContext(UserContext);
