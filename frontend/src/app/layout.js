import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: {
    template: '%s | Health Endpoint',
    default: 'Health Endpoint',
  },
  description: 'Health Endpoint Monitoring FE'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

