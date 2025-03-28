import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Global Shapers Bengaluru",
  description: "Global Shapers Bengaluru II Hub - Official Website",
  keywords: "Global Shapers, Bengaluru, World Economic Forum, Changemakers, Social Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-grow flex-shrink-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
