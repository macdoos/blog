import { Analytics } from "./blog/analytics";
import { doge } from "./doge";
import { Footer } from "./blog/footer";
import { themeEffect } from "./theme-effect";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import './globals.css';

export const metadata = {
  title: "macdoos",
  description: "hacker larping as swe",
  openGraph: {
    title: "macdoos",
    description: "hacker larping as swe",
    url: "https://macdoos.dev",
    siteName: "macdoos",
  },
  twitter: {
    card: "summary_large_image",
    site: "@macdoos",
    creator: "@macdoos",
  },
  metadataBase: new URL("https://macdoos.dev"),
  icons: {
    icon: "/icon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen font-mono">{children}</main>
      </body>
    </html>
  );
}
