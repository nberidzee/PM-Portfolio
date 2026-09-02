import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noe Beridze — Project Manager",
  description:
    "Project Manager with 7+ years of experience coordinating cross-functional initiatives across enterprise operations and B2B SaaS product delivery.",
  keywords: [
    "Noe Beridze",
    "Project Manager",
    "B2B SaaS",
    "Operations",
    "Tbilisi",
    "Remote",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
