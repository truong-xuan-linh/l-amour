"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Eye, QrCode } from "lucide-react";
import Link from "next/link";

const categories = ["Tất cả", "Cổ điển", "Hiện đại", "Floral", "Minimalist"];

const templates = [
  {
    id: 1,
    title: "Vintage Romance",
    category: "Cổ điển",
    image: "https://picsum.photos/seed/vintage/600/800",
  },
  {
    id: 2,
    title: "Urban Chic",
    category: "Hiện đại",
    image: "https://picsum.photos/seed/modern/600/800",
  },
  {
    id: 3,
    title: "Spring Blossom",
    category: "Floral",
    image: "https://picsum.photos/seed/floral/600/800",
  },
  {
    id: 4,
    title: "Pure Elegance",
    category: "Minimalist",
    image: "https://picsum.photos/seed/minimal/600/800",
  },
  {
    id: 5,
    title: "Royal Gold",
    category: "Cổ điển",
    image: "https://picsum.photos/seed/royal/600/800",
  },
  {
    id: 6,
    title: "Botanic Garden",
    category: "Floral",
    image: "https://picsum.photos/seed/botanic/600/800",
  },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredTemplates =
    activeCategory === "Tất cả"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thư viện mẫu thiệp
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Khám phá bộ sưu tập thiệp cưới được thiết kế độc quyền, đa dạng
            phong cách từ cổ điển đến hiện đại, giúp bạn dễ dàng tìm thấy thiết
            kế hoàn hảo cho ngày trọng đại.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-sage text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 aspect-[3/4]"
              >
                <Image
                  src={template.image}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 backdrop-blur-sm">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-champagne hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Eye size={18} /> Xem Demo
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/20 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <QrCode size={18} /> Quét QR
                  </button>
                </div>

                {/* Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-medium text-champagne uppercase tracking-wider mb-1">
                    {template.category}
                  </p>
                  <h3 className="font-playfair text-2xl">{template.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="#contact" className="inline-block px-8 py-4 bg-transparent border-2 border-champagne text-champagne hover:bg-champagne hover:text-white rounded-full font-medium text-lg transition-all">
            Nhận tư vấn mẫu thiệp
          </Link>
        </div>
      </div>
    </section>
  );
}
