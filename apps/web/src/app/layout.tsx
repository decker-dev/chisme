import { Geist, Geist_Mono } from "next/font/google";

import "@dkr/ui/styles/globals.css";
import { Providers } from "@/components/providers";
import { Provider as AnalyticsProvider } from "@dkr/analytics/client";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
        <AnalyticsProvider />
        <Toaster richColors />
      </body>
    </html>
  );
}
