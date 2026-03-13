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
    </main>
  );
}
