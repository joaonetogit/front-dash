"use client";

import { FormField, FormItem, FormMessage } from "@/components/ui/Form";
import type { IForm } from "@/types/base";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useCallback, useState } from "react";
import DragDropFiles from "../../DragDropFiles";
import FormMyDetailsRowContent from "../FormMyDetailsRowContent";

export default function PhotoSection({ form }: IForm) {
	const [selectedFile, setSelectedFile] = useState<string | null>(null);

	const handleFileSelect = useCallback(
		(file: File) => {
			setSelectedFile(URL.createObjectURL(file));
			form.setValue("photo", file);
		},
		[form],
	);

	return (
		<FormMyDetailsRowContent title="Your photo" supportText="This will be displayed on your profile.">
			<FormField
				control={form.control}
				name="photo"
				render={() => (
					<FormItem className="mt-5 flex flex-col gap-5 space-y-2 sm:mt-0 sm:flex-row sm:gap-4 sm:space-y-0">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F5FF]">
							{selectedFile ? (
								<Image
									width={64}
									height={64}
									src={selectedFile}
									alt="Selected"
									className="h-full w-full rounded-full object-cover"
								/>
							) : (
								<UserIcon className="size-8 text-[#7F56D9]" />
							)}
						</div>
						<div className="w-full flex-1">
							<DragDropFiles onFileSelect={handleFileSelect} />
							<FormMessage />
						</div>
					</FormItem>
				)}
			/>
		</FormMyDetailsRowContent>
	);
}
