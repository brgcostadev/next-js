import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aplicando conhecimentos em next JS",
  description: "Criado por Bruno Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
