import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "CyberRecovery - Securing Your Crypto Future | Blockchain Intelligence & AML Compliance",
  description: "World-class blockchain intelligence to combat fraud and protect your assets. Comprehensive AML compliance, blockchain forensics, and threat intelligence solutions.",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

