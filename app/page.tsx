import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";

const templates = [
  { slug: "wedding-badminton", title: "The Badminton Love", category: "Thể thao", description: "Thiệp cưới phong cách cầu lông — năng động, tươi vui cho cặp đôi yêu thể thao." },
  { slug: "wedding-celestial-flame", title: "The Celestial Flame", category: "Độc đáo", description: "Thần thoại Rồng & Rắn phương Đông hòa quyện chiêm tinh học phương Tây." },
  { slug: "wedding-cinema", title: "Forever & A Day", category: "Hiện đại", description: "Thiệp cưới phong cách Netflix điện ảnh — câu chuyện tình yêu như bộ phim bom tấn." },
  { slug: "wedding-giao-thoa", title: "Nét Giao Thoa", category: "Cổ điển", description: "Modern Retro Việt Nam — giao thoa truyền thống và thiết kế hiện đại." },
  { slug: "wedding-glass-gallery", title: "The Glass Gallery", category: "Sang trọng", description: "Glassmorphism cao cấp — Triển Lãm Kính & Ánh Sáng, tình yêu khắc vào pha lê." },
  { slug: "wedding-love-stream", title: "The Love Stream", category: "Hiện đại", description: "Thiệp cưới phong cách TikTok Livestream cho cặp đôi Gen Z." },
  { slug: "wedding-marble", title: "The Minimalist Marble", category: "Sang trọng", description: "Cẩm Thạch Tối Giản — vẻ đẹp bền vững của đá marble và vàng miếng." },
  { slug: "wedding-midnight-purr", title: "The Midnight Purr", category: "Độc đáo", description: "Dark mode sang trọng bí ẩn — thiệp cưới chủ đề mèo độc đáo." },
  { slug: "wedding-paws-promises", title: "Paws & Promises", category: "Độc đáo", description: "Thiệp cưới chủ đề chó Golden Retriever — hành trình tình yêu qua đôi mắt thú cưng." },
  { slug: "wedding-pickleball", title: "The Perfect Dink", category: "Thể thao", description: "Thiệp cưới phong cách Pickleball — Pop-art năng động cho cặp đôi yêu thể thao." },
  { slug: "wedding-quiet-luxury", title: "The Quiet Luxury", category: "Sang trọng", description: "Old Money aesthetic — thiệp cưới tối giản sang trọng phong cách quý tộc." },
  { slug: "wedding-royal-wax-seal", title: "The Royal Wax Seal", category: "Cổ điển", description: "Dấu Ấn Hoàng Gia — thiệp cưới phong bì dấu sáp sang trọng cổ điển." },
  { slug: "wedding-rpg", title: "Level Up: Eternal Quest", category: "Độc đáo", description: "Thiệp cưới phong cách game RPG Pixel Art 8-bit cho cặp đôi yêu game." },
  { slug: "wedding-silk-motion", title: "Silk & Motion", category: "Sang trọng", description: "Lụa & Chuyển Động — thiệp cưới mềm mại tinh tế sang trọng." },
  { slug: "wedding-velvet-night", title: "Velvet Night & Stardust", category: "Sang trọng", description: "Đêm Nhung & Bụi Sao — thiệp cưới huyền bí với chòm sao và đồng hồ Thụy Sĩ." },
  { slug: "wedding-vinyl-record", title: "The Vinyl Record", category: "Cổ điển", description: "Đĩa Than Retro-Modern — thiệp cưới nghệ thuật âm thanh cho cặp đôi yêu âm nhạc." },
];

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "L'Amour Link",
    "serviceType": "Tạo website thiệp cưới online",
    "provider": {
      "@type": "LocalBusiness",
      "name": "L'Amour Link",
      "telephone": "035",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Đường Nguyễn Lâm, Phường Gia Định",
        "addressLocality": "TP. Hồ Chí Minh",
        "addressCountry": "VN"
      }
    },
    "url": "https://www.lamour.com.vn"
  };

  const jsonLd = serviceJsonLd;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Thư viện mẫu thiệp cưới online L'Amour Link",
    "description": "Bộ sưu tập hơn 16 mẫu thiệp cưới online độc quyền — từ sang trọng cổ điển đến thể thao (cầu lông, pickleball), game RPG, điện ảnh, TikTok.",
    "url": "https://www.lamour.com.vn/#templates",
    "numberOfItems": templates.length,
    "itemListElement": templates.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `Mẫu thiệp cưới ${t.title} — ${t.category}`,
      "description": t.description,
      "url": `https://${t.slug}.vercel.app`,
    })),
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Templates />
      <Features />
      <HowItWorks />
      <SocialProof />
      <ContactForm />
      <Footer />
      <FloatingButtons />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </main>
  );
}
