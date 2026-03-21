"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";

const categories = ["Tất cả", "Sang trọng", "Cổ điển", "Hiện đại", "Thể thao", "Độc đáo"];

const templates = [
  {
    id: 1,
    slug: "wedding-badminton",
    title: "The Badminton Love",
    category: "Thể thao",
    description: "Năng động & tươi vui — thiệp cưới phong cách cầu lông dành cho cặp đôi yêu thể thao.",
    image: "/templates/wedding-badminton.webp",
    previewUrl: "https://wedding-badminton.vercel.app",
  },
  {
    id: 2,
    slug: "wedding-celestial-flame",
    title: "The Celestial Flame",
    category: "Độc đáo",
    description: "Thần thoại Rồng & Rắn phương Đông hòa quyện chiêm tinh học phương Tây — huyền bí, sang trọng.",
    image: "/templates/wedding-celestial-flame.webp",
    previewUrl: "https://wedding-celestial-flame.vercel.app",
  },
  {
    id: 3,
    slug: "wedding-cinema",
    title: "Forever & A Day",
    category: "Hiện đại",
    description: "Phong cách Netflix / Điện ảnh — câu chuyện tình yêu được kể như một bộ phim bom tấn.",
    image: "/templates/wedding-cinema-pink.webp",
    previewUrl: "https://wedding-cinema.vercel.app",
  },
  {
    id: 4,
    slug: "wedding-giao-thoa",
    title: "Nét Giao Thoa",
    category: "Cổ điển",
    description: "Modern Retro Việt Nam — giao thoa giữa hồn cốt truyền thống và thẩm mỹ thiết kế hiện đại.",
    image: "/templates/wedding-giao-thoa.webp",
    previewUrl: "https://wedding-giao-thoa.vercel.app",
  },
  {
    id: 5,
    slug: "wedding-glass-gallery",
    title: "The Glass Gallery",
    category: "Sang trọng",
    description: "Glassmorphism cao cấp — Triển Lãm Kính & Ánh Sáng, nơi tình yêu được khắc vào pha lê.",
    image: "/templates/wedding-glass-gallery.webp",
    previewUrl: "https://wedding-glass-gallery.vercel.app",
  },
  {
    id: 6,
    slug: "wedding-love-stream",
    title: "The Love Stream",
    category: "Hiện đại",
    description: "Phong cách TikTok Livestream — năng động, tương tác cao dành cho cặp đôi Gen Z.",
    image: "/templates/wedding-love-stream.webp",
    previewUrl: "https://wedding-love-stream.vercel.app",
  },
  {
    id: 7,
    slug: "wedding-marble",
    title: "The Minimalist Marble",
    category: "Sang trọng",
    description: "Cẩm Thạch Tối Giản — vẻ đẹp bền vững của đá marble và vàng miếng, biểu tượng của sự vĩnh cửu.",
    image: "/templates/wedding-marble.webp",
    previewUrl: "https://wedding-marble.vercel.app",
  },
  {
    id: 8,
    slug: "wedding-midnight-purr",
    title: "The Midnight Purr",
    category: "Độc đáo",
    description: "Dark mode sang trọng bí ẩn — dành riêng cho cặp đôi yêu mèo với onboarding cuộn len độc đáo.",
    image: "/templates/wedding-midnight-purr.webp",
    previewUrl: "https://wedding-midnight-purr.vercel.app",
  },
  {
    id: 9,
    slug: "wedding-paws-promises",
    title: "Paws & Promises",
    category: "Độc đáo",
    description: "Hành trình tình yêu kể qua đôi mắt của Lucky — chú chó Golden Retriever dẫn đường cho khách mời.",
    image: "/templates/wedding-paws-promises.webp",
    previewUrl: "https://wedding-paws-promises.vercel.app",
  },
  {
    id: 10,
    slug: "wedding-pickleball",
    title: "The Perfect Dink",
    category: "Thể thao",
    description: "Pop-art năng động đầy màu sắc — thiệp cưới phong cách Pickleball cho cặp đôi yêu thể thao.",
    image: "/templates/wedding-pickleball.webp",
    previewUrl: "https://wedding-pickleball.vercel.app",
  },
  {
    id: 11,
    slug: "wedding-quiet-luxury",
    title: "The Quiet Luxury",
    category: "Sang trọng",
    description: "Old Money aesthetic — tối giản sang trọng, tinh tế với typography làm linh hồn thiết kế.",
    image: "/templates/wedding-quiet-luxury.webp",
    previewUrl: "https://wedding-quiet-luxury.vercel.app",
  },
  {
    id: 12,
    slug: "wedding-royal-wax-seal",
    title: "The Royal Wax Seal",
    category: "Cổ điển",
    description: "Dấu Ấn Hoàng Gia — cảm giác nhận bức thư tay từ giới quý tộc với dấu sáp và phong bì mỹ thuật.",
    image: "/templates/wedding-royal-wax-seal.webp",
    previewUrl: "https://wedding-royal-wax-seal.vercel.app",
  },
  {
    id: 13,
    slug: "wedding-rpg",
    title: "Level Up: Eternal Quest",
    category: "Độc đáo",
    description: "Pixel Art 8-bit RPG — câu chuyện tình yêu được kể như một hành trình phiêu lưu nhập vai.",
    image: "/templates/wedding-rpg.webp",
    previewUrl: "https://wedding-rpg.vercel.app",
  },
  {
    id: 14,
    slug: "wedding-silk-motion",
    title: "Silk & Motion",
    category: "Sang trọng",
    description: "Lụa & Chuyển Động — mềm mại, tinh tế với những chuyển động nhẹ nhàng tạo cảm giác sang trọng.",
    image: "/templates/wedding-silk-motion.webp",
    previewUrl: "https://wedding-silk-motion.vercel.app",
  },
  {
    id: 15,
    slug: "wedding-velvet-night",
    title: "Velvet Night & Stardust",
    category: "Sang trọng",
    description: "Đêm Nhung & Bụi Sao — sang trọng huyền bí với chòm sao, đồng hồ Thụy Sĩ và dải lụa tương tác.",
    image: "/templates/wedding-velvet-night.webp",
    previewUrl: "https://wedding-velvet-night.vercel.app",
  },
  {
    id: 16,
    slug: "wedding-vinyl-record",
    title: "The Vinyl Record",
    category: "Cổ điển",
    description: "Đĩa Than Retro-Modern — sang trọng và nghệ thuật âm thanh, dành cho cặp đôi yêu âm nhạc.",
    image: "/templates/wedding-vinyl-record.webp",
    previewUrl: "https://wedding-vinyl-record.vercel.app",
  },
];

const categoryCount = (cat: string) =>
  templates.filter((t) => t.category === cat).length;

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredTemplates =
    activeCategory === "Tất cả"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-champagne text-sm font-medium uppercase tracking-widest mb-4">
            Bộ sưu tập thiết kế độc quyền
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thư viện mẫu thiệp cưới
          </h2>
          <p className="text-gray-600 text-lg font-light">
            {templates.length}+ mẫu thiệp cưới online độc quyền — từ sang trọng cổ điển đến thể thao năng động,
            từ tối giản tinh tế đến độc đáo sáng tạo. Tìm mẫu phù hợp với cá tính của bạn.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("Tất cả")}
            aria-pressed={activeCategory === "Tất cả"}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "Tất cả"
                ? "bg-sage text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tất cả
            <span className="ml-2 text-xs opacity-70">({templates.length})</span>
          </button>
          {categories.slice(1).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-sage text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">({categoryCount(category)})</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTemplates.map((template) => (
              <article
                key={template.id}
                className="group relative rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 aspect-[3/4]"
              >
                <Image
                  src={template.image}
                  alt={`Mẫu thiệp cưới ${template.title} — ${template.description}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white z-10">
                  {template.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 backdrop-blur-sm z-20">
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-champagne hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    aria-label={`Xem demo mẫu thiệp cưới ${template.title}`}
                  >
                    <Eye size={18} /> Xem Demo
                  </a>
                  <Link
                    href="#contact"
                    className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/20 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                  >
                    <MessageCircle size={18} /> Đặt mẫu này
                  </Link>
                </div>

                {/* Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <h3 className="font-playfair text-xl mb-1">{template.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-2">{template.description}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-sm">
            Không tìm thấy mẫu ưng ý? Chúng tôi thiết kế độc quyền theo yêu cầu của bạn.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-champagne text-champagne hover:bg-champagne hover:text-white rounded-full font-medium text-lg transition-all"
          >
            Nhận tư vấn mẫu thiệp
          </Link>
        </div>
      </div>
    </section>
  );
}
