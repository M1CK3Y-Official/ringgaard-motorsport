import "./globals.css"; 
import { geistFont } from '@/utils/fonts';

export const metadata = {
  title: {
    default: "Mathias Ringgaard Motorsport",
    template: "%s | Mathias Ringgaard Motorsport",
  },
  description: "Officiel hjemmeside for Mathias Ringgaard Motorsport – events, nyheder og meget mere.",
  openGraph: {
    title: "Mathias Ringgaard Motorsport",
    description: "Officiel hjemmeside for Mathias Ringgaard Motorsport – events, nyheder og meget mere.",
    // url: "https://ringgaardmotorsport.dk",
    siteName: "Mathias Ringgaard Motorsport",
    // images: [
    //   {
    //     url: "https://ringgaardmotorsport.dk/images/og-default.jpg", // dit standardbillede
    //     width: 1200,
    //     height: 630,
    //     alt: "Mathias Ringgaard Motorsport",
    //   },
    // ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Ringgaard Motorsport",
    description: "Officiel hjemmeside for Mathias Ringgaard Motorsport – events, nyheder og meget mere.",
    // images: ["https://ringgaardmotorsport.dk/images/og-default.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistFont.className}>
        {children}
      </body>
    </html>
  );
}
