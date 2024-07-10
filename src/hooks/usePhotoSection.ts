import { useCallback, useState } from 'react';

export default function usePhotoSection(form: any) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileSelect = useCallback(
    (file: File) => {
      setSelectedFile(URL.createObjectURL(file));
      form.setValue('photo', file);
    },
    [form],
  );

  return { selectedFile, handleFileSelect };
}
