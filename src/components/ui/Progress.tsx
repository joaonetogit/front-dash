'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import cn from '@/lib/utils';

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
	barColor?: string;
};

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
	({ className, barColor, value, ...props }, ref) => (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary/100', className)}
			{...props}
			aria-label="progress"
		>
			<ProgressPrimitive.Indicator
				className={cn('h-full w-full flex-1 bg-primary transition-all', barColor)}
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
				aria-label="progress-indicator"
			/>
		</ProgressPrimitive.Root>
	),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
