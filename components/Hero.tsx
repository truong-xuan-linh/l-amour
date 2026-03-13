"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sage blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-champagne blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block text-sage font-semibold tracking-[0.2em] uppercase text-sm mb-6"
          >
            L&apos;Amour Link - Kết nối tình yêu
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6"
          >
            Gói trọn khoảnh khắc <br className="hidden md:block" />
            <span className="text-champagne italic font-medium">
              hạnh phúc
            </span>{" "}
            vào một điểm chạm.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-10 font-light leading-relaxed"
          >
            Tạo thiệp cưới online sang trọng, tinh tế mang đậm dấu ấn cá nhân.
            Gửi gắm lời mời trân trọng nhất đến những người thân yêu chỉ trong
            vài phút.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link href="#contact" className="group relative px-8 py-4 bg-champagne text-white rounded-full font-medium text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              <span className="relative z-10">Nhận tư vấn thiết kế</span>
              <ArrowRight
                className="relative z-10 group-hover:translate-x-1 transition-transform"
                size={20}
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
            <Link href="#templates" className="px-8 py-4 bg-transparent border border-sage/30 text-sage hover:bg-sage/5 rounded-full font-medium text-lg transition-all w-full sm:w-auto text-center">
              Xem mẫu thiệp
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] md:h-[600px] w-full flex justify-center items-center"
        >
          {/* Phone Mockup */}
          <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-gray-100 overflow-hidden z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-100 rounded-b-3xl w-1/2 mx-auto z-30" />
            <Image
              src="https://picsum.photos/seed/wedding1/600/1200"
              alt="Wedding Invitation Demo"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
              <h3 className="font-playfair text-2xl mb-1">Minh & Anh</h3>
              <p className="text-sm font-light tracking-widest uppercase">
                Save the date
              </p>
              <p className="text-xs mt-2 opacity-80">24 . 10 . 2026</p>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 right-10 md:right-20 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">
                Xác nhận tham dự
              </p>
              <p className="text-sm font-bold text-gray-800">124 khách</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 left-0 md:left-10 bg-white p-3 rounded-2xl shadow-xl z-30"
          >
            <Image
              src="https://picsum.photos/seed/flowers/100/100"
              alt="Floral detail"
              width={80}
              height={80}
              className="rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
