import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "L'Amour Link",
    "serviceType": "Tạo website thiệp cưới online",
    "provider": {
      "@type": "LocalBusiness",
      "name": "L'Amour Link",
      "telephone": "0354693885",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Đường Nguyễn Lâm, Phường Gia Định",
        "addressLocality": "TP. Hồ Chí Minh",
        "addressCountry": "VN"
      }
    },
    "url": "https://www.lamour.com.vn"
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
    </main>
  );
}
