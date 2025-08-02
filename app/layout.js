import './globals.css';
import Navbar from '@/components/Navbar';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Simple Blog Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <SessionProviderWrapper>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
