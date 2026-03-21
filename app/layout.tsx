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
  title: "L'Amour Link — Thiệp cưới online đẹp, độc đáo & sang trọng",
  description: "Thiệp cưới online đẹp nhất Việt Nam. Hơn 16 mẫu thiệp cưới độc quyền: sang trọng, cổ điển, thể thao (cầu lông, pickleball), RPG, điện ảnh, TikTok. Tích hợp RSVP, bản đồ, album ảnh.",
  keywords: [
    "thiệp cưới online",
    "mẫu thiệp cưới online đẹp",
    "website đám cưới",
    "tạo thiệp cưới điện tử",
    "thiệp cưới L'Amour",
    "mẫu thiệp cưới phong cách cầu lông",
    "thiệp cưới cầu lông",
    "mẫu thiệp cưới pickleball",
    "thiệp cưới thể thao",
    "thiệp cưới phong cách game RPG",
    "thiệp cưới pixel art",
    "thiệp cưới phong cách điện ảnh Netflix",
    "thiệp cưới TikTok Gen Z",
    "thiệp cưới sang trọng tối giản",
    "thiệp cưới old money",
    "thiệp cưới glassmorphism",
    "thiệp cưới hoàng gia dấu sáp",
    "thiệp cưới truyền thống Việt Nam",
    "thiệp cưới yêu mèo",
    "thiệp cưới chủ đề thú cưng",
    "thiệp cưới đĩa than retro",
    "thiệp cưới độc đáo sáng tạo",
    "thiệp cưới minimalist",
  ],
  openGraph: {
    title: "L'Amour Link — Thiệp cưới online đẹp & độc đáo",
    description: "Hơn 16 mẫu thiệp cưới online độc quyền: cầu lông, pickleball, RPG, điện ảnh, TikTok, sang trọng, cổ điển. Tạo thiệp cưới online trong 5 phút.",
    url: "https://www.lamour.com.vn",
    siteName: "L'Amour Link",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Amour Link — Thư viện mẫu thiệp cưới online đẹp nhất Việt Nam",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lamour.com.vn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
