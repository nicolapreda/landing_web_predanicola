import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolapreda.it'),
  title: "Nicola Preda | Sviluppo Web Custom & Consulenza Next.js",
  description: "Sviluppo siti web e applicazioni custom ad alte prestazioni. Specializzato in Next.js, React e Docker. Niente template, solo codice sartoriale per aziende ambiziose.",
  keywords: ["Sviluppo Web", "Next.js", "React", "Docker", "Sito Web Custom", "Consulenza SEO", "Performance Web", "Nicola Preda"],
  authors: [{ name: "Nicola Preda", url: "https://nicolapreda.it" }],
  creator: "Nicola Preda",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://nicolapreda.it",
    title: "Nicola Preda | Sviluppo Web Custom & Consulenza Next.js",
    description: "Trasformo idee in codice performante. Siti web veloci, sicuri e scalabili costruiti con le migliori tecnologie moderne.",
    siteName: "Nicola Preda",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicola Preda - Sviluppo Web Custom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicola Preda | Sviluppo Web Custom",
    description: "Sviluppo siti web e applicazioni custom ad alte prestazioni.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nicola Preda Web Development",
    "image": "https://nicolapreda.it/logo.webp",
    "url": "https://nicolapreda.it",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Italy",
      "addressCountry": "IT"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://github.com/predanicola",
      "https://linkedin.com/in/predanicola"
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
