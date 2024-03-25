import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "../_components/header";
import Footer from "../_components/footer";
import '/styles/main-global.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyage Markets",
  description: "Explore simulated trading in Forex, Commodities, Indices, and Cryptocurrencies with low latency on our award winning trading platforms.",
  keywords: "Trading, Forex Trading, Forex, Finance, Crypto, Simulated Trading",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body className={inter.className}>
        <Header />
        <div className="wrapper">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
