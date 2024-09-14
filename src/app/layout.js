import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/lib/Provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const uncutSans = localFont({
  src: "../../public/fonts/Uncut-Sans-VF.ttf",
  variable: "--font-uncut-sans",
  weight: "400 800",
});

export const metadata = {
  title: {
    default: "Secure Financial Assistance",
    template: "%s | Secure Financial Assistance",
  },
  description:
    "This is the official website for an opportunity to secure financial assistance for post graduate studies in australia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/public/images/favicon.svg"
          type="image/x-icon"
        />
      </head>

      <body
        className={`${uncutSans.className} ${uncutSans.variable} box-border antialiased`}
      >
        <Provider>
          <main>{children}</main>

          <Toaster richColors duration={1800} position="bottom-center" />
          <NextTopLoader />
        </Provider>
      </body>
    </html>
  );
}
