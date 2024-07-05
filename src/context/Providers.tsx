import { IChildren } from '@/types/base';
import ThemeProvider from './ThemeProvider';

export default function Providers({ children }: IChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
