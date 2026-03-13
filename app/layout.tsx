import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css"; // Global styles

const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "L'Amour Link - Thiệp cưới online tinh tế",
  description:
    "Gói trọn khoảnh khắc hạnh phúc vào một điểm chạm. Nền tảng tạo thiệp cưới online sang trọng, tinh tế.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
