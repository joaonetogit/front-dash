'use client';

import { useUserContext } from '@/context/UserProvider';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export default function User() {
  const { user, handleLogout } = useUserContext();

  if (!user) {
    return <div>Usuário não logado</div>;
  }

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <Avatar>
          <AvatarImage className="h-10 w-10" src={user.image} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-semibold text-zinc-700">{user.name}</p>
          <p className="text-zinc-500">{user.email}</p>
        </div>
      </div>

      <button type="button" onClick={handleLogout} aria-label="Exit">
        <ArrowRightStartOnRectangleIcon className="size-5 text-zinc-500" />
      </button>
    </div>
  );
}
