
import type { Metadata } from "next";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "@/ClientProvider";
import UserContext from "@/context/UserContext";


export const metadata: Metadata = {
  title: "Next js project - for practice",
  description: "This project is for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <ClientProvider>
          <UserContext>
            {children}
          </UserContext>
        </ClientProvider>

      </body>
    </html>
  );
}
