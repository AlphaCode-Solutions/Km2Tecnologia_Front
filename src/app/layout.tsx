import type { Metadata } from 'next';
import './ui/globals.css';
import { Providers } from './providers';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: 'KM2 Tecnología',
  description: 'Sitio web de KM2 Tecnología',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <Providers>
          <div className="max-w-screen min-w-screen min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;