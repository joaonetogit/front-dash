"use client";

import { useUserContext } from "@/context/UserProvider";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function User() {
	const { user } = useUserContext();

	if (!user) return null;

	return (
		<div className="flex items-start justify-between">
			<div className="flex items-start gap-3">
				<Image width={40} height={40} src={user.image} alt="User" className="rounded-full" onError={() => "/avatar.jpg"} />
				<div className="text-sm">
					<p className="font-semibold text-zinc-700">{user.name}</p>
					<p className="text-zinc-500">{user.email}</p>
				</div>
			</div>

			<button type="button" aria-label="Logout button">
				<ArrowRightStartOnRectangleIcon className="size-5 text-zinc-500" />
			</button>
		</div>
	);
}
