import { IDragDropFiles } from '@/types/components/DragDropFiles';
import { ChangeEvent } from 'react';

export default function useDragDropFiles(onFileSelect: IDragDropFiles['onFileSelect']) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && onFileSelect && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  return { handleFileChange };
}
