import "./globals.css";

import { Header } from "../header";
import { Footer } from "./footer";
import { Analytics } from "./analytics";

export const metadata = {
  title: "macdoos's blog",
  description: "internet baby girl",
  openGraph: {
    title: "macdoos's blog",
    description: "internet baby girl",
    url: "https://macdoos.dev",
    siteName: "macdoos's blog",
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

export const viewport = {
  themeColor: "transparent",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
      <Analytics />
    </section>
  );
}
