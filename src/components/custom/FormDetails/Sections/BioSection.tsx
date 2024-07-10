import { FormField, FormItem, FormMessage } from '@/components/ui/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import DataToogleBioText from '@/constants/ToogleBioText';
import useBioSection from '@/hooks/useBioSection';
import { IForm } from '@/types/base';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function BioSection({ form }: IForm) {
  const { charCount, handleTextareaChange, MAX_CHAR_COUNT } = useBioSection();

  return (
    <FormMyDetailsRowContent
      title='Bio'
      supportText='Write a short introduction.'
    >
      <FormField
        control={form.control}
        name='bio'
        render={({ field }) => (
          <FormItem>
            <div className='mt-5 flex flex-col gap-4 sm:mt-0 sm:gap-3'>
              <div className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Normal Text' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='normal'>Normal Text</SelectItem>
                    <SelectItem value='heading-1'>Heading 1</SelectItem>
                    <SelectItem value='heading-2'>Heading 2</SelectItem>
                  </SelectContent>
                </Select>
                <ToggleGroup type='multiple'>
                  {DataToogleBioText.map(item => (
                    <ToggleGroupItem
                      className='p-2 text-[#A1A1AA]'
                      key={item.value}
                      value={item.value}
                      aria-label={item.ariaLabel}
                    >
                      <div className='h-4 w-4'>{item.icon}</div>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <div className='space-y-[6px]'>
                <Textarea
                  placeholder='Type your bio here.'
                  id='message'
                  className='resize-none'
                  rows={6}
                  maxLength={MAX_CHAR_COUNT}
                  {...field}
                  onChange={event => {
                    handleTextareaChange(event);
                    field.onChange(event);
                  }}
                />
                <p className='text-sm text-muted-foreground'>
                  {charCount <= 0
                    ? "You've reached the character limit"
                    : `${charCount} characters left`}
                </p>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
