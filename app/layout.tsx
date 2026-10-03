import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test a Go API with Keploy",
  description:
    "A beginner-friendly tutorial: record and replay API tests for a Go app with Keploy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <header className="border-b">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
              <span className="font-semibold">Keploy + Go quickstart</span>
              <ThemeToggle />
            </div>
          </header>
          <main className="prose dark:prose-invert mx-auto w-full max-w-3xl flex-1 px-4 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}