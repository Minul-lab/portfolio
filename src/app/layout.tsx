import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mohaiminul.dev"),
  title: "MD. MOHAIMINUL | Frontend Developer & Software Engineer",
  description:
    "Personal portfolio of MD. Mohaiminul — Frontend Developer and Electronics & Communication Engineering student at HSTU. Specialized in React, Next.js, Tailwind CSS, and MERN stack development.",
  keywords: [
    "MD Mohaiminul",
    "Mohaiminul",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "HSTU",
    "Software Engineer Bangladesh",
    "Web Developer Dinajpur",
    "Bazar-Dor",
    "FitLog",
    "DevStack",
  ],
  authors: [{ name: "MD. MOHAIMINUL", url: "https://github.com/Minul-lab" }],
  creator: "MD. MOHAIMINUL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohaiminul.dev",
    siteName: "MD. MOHAIMINUL Portfolio",
    title: "MD. MOHAIMINUL | Frontend Developer & Software Engineer",
    description:
      "Frontend Developer building thoughtful, fast, and user-focused web experiences with React, Next.js, and Tailwind CSS.",
    images: [
      {
        url: "/images/mohaiminul.jpg",
        width: 1200,
        height: 630,
        alt: "MD. MOHAIMINUL - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. MOHAIMINUL | Frontend Developer",
    description:
      "Frontend Developer and ECE student building modern web applications with React, Next.js, and Tailwind CSS.",
    images: ["/images/mohaiminul.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
