import { IFeaturedIcon } from '@/types/components/FeaturedIcon';
import { cva } from 'class-variance-authority';

const iconStyles = cva('flex items-center justify-center rounded-full border-[6px]', {
  variants: {
    variant: {
      default: 'border-[#F9FAFB] h-10 w-10',
      primary: 'border-[#E5E7EB] h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const innerDivStyles = cva('flex h-full w-full items-center justify-center rounded-full', {
  variants: {
    variant: {
      default: 'bg-[#F2F4F7]',
      primary: 'bg-[#3B82F6]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const iconVariantStyles = cva('', {
  variants: {
    variant: {
      default: 'text-[#6B7280] size-5 stroke-[1.67px]',
      primary: 'text-white size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function FeaturedIcon({ variant = 'default', icon }: IFeaturedIcon) {
  return (
    <div className={iconStyles({ variant })}>
      <div className={innerDivStyles({ variant })}>
        <div className={iconVariantStyles({ variant })}>{icon}</div>
      </div>
    </div>
  );
}
