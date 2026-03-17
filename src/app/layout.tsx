import type { Metadata, Viewport } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import { Nav } from "@/components/nav";
import { CurrencySelector } from "@/components/currency-selector";
import { CurrencyProvider } from "@/lib/currency-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Zakat Calculator",
  description:
    "Calculate your zakat based on the Quran, Sunnah, and the rulings of Ibn Baz, Ibn Uthaymeen, and Ibn Taymiyyah.",
  openGraph: {
    title: "Zakat Calculator",
    description:
      "Accurate zakat calculation grounded in the teachings of the Salaf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoNaskhArabic.variable} antialiased`}
      >
        <CurrencyProvider>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6">
            <div className="pt-8 sm:pt-12 flex items-center justify-between">
              <a
                href="/"
                className="text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                Zakat Calculator
              </a>
              <div className="flex items-center gap-1">
                <Nav />
                <span className="mx-1 h-4 w-px bg-neutral-200" />
                <CurrencySelector />
              </div>
            </div>
            {children}
          </main>

          <footer className="border-t border-neutral-100 py-8 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs text-neutral-500 leading-relaxed">
                Based on the rulings of Shaykh Ibn Baz, Shaykh Ibn Uthaymeen,
                and Shaykh al-Islam Ibn Taymiyyah (rahimahumullah). Not a
                substitute for consulting a scholar directly.
              </p>
            </div>
          </footer>
        </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
