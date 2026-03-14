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
  metadataBase: new URL("https://www.lamour.com.vn"),
  title: "L'Amour Link - Thiết kế thiệp cưới online tinh tế & sang trọng",
  description: "Gói trọn khoảnh khắc hạnh phúc vào một điểm chạm. Nền tảng tạo website thiệp cưới online sang trọng, tích hợp RSVP, bản đồ và album ảnh.",
  keywords: ["thiệp cưới online", "website đám cưới", "tạo thiệp cưới điện tử", "e-invitation", "thiệp cưới L'Amour"],
  openGraph: {
    title: "L'Amour Link - Thiệp cưới online tinh tế",
    description: "Nền tảng tạo website thiệp cưới online mang đậm dấu ấn cá nhân.",
    url: "https://www.lamour.com.vn",
    siteName: "L'Amour Link",
    images: [
      {
        url: "/og-image.jpg", // Bạn cần thêm 1 ảnh og-image.jpg (kích thước 1200x630) vào thư mục /public
        width: 1200,
        height: 630,
        alt: "L'Amour Link Wedding Website",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lamour.com.vn",
  },
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
