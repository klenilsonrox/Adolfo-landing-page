import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adolfo mendes",
  description: "Adolfo Mendes | Advocacia especializada em Direito Civil e Trabalhista Atuação comprometida, ética e personalizada na defesa dos seus direitos. Consultas, processos, orientação jurídica e acompanhamento completo. Fale com um advogado experiente e de confiança.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
