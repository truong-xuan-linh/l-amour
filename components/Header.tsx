"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Mẫu thiệp", href: "#templates" },
    { name: "Tính năng", href: "#features" },
    { name: "Quy trình", href: "#how-it-works" },
    { name: "Đánh giá", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2">
          <span className="font-playfair text-2xl font-bold tracking-wider text-champagne">
            L&apos;Amour Link
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-champagne transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-champagne text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-champagne/90 transition-colors shadow-sm">
            Nhận tư vấn ngay
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md shadow-lg py-6 px-4 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-champagne transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-champagne text-white px-8 py-3 rounded-full text-base font-medium hover:bg-champagne/90 transition-colors shadow-sm w-full max-w-xs text-center">
              Nhận tư vấn ngay
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
