'use client';

import { IChildren, IUser } from '@/types/base';
import { IUserContextProps } from '@/types/context/User';
import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext<IUserContextProps>({
  user: null,
});

export function UserProvider({ children }: IChildren) {
  const [user] = useState<IUser | null>({
    image: '/avatar.jpg',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    percentStorageUsed: 80,
  });

  const value = useMemo(() => ({ user }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = (): IUserContextProps => useContext(UserContext);
