"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo Button (using a generic message icon for now, or custom SVG if preferred) */}
      <motion.a
        href="https://zalo.me/your-zalo-id"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#0068FF] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#0055D4] transition-colors relative group"
        aria-label="Chat on Zalo"
      >
        <span className="font-bold text-2xl leading-none">Z</span>
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat qua Zalo
        </span>
      </motion.a>

      {/* Messenger Button */}
      <motion.a
        href="https://m.me/your-page-id"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] rounded-full shadow-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity relative group"
        aria-label="Chat on Messenger"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat qua Messenger
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:0123456789"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-champagne rounded-full shadow-lg flex items-center justify-center text-white hover:bg-champagne/90 transition-colors relative group"
        aria-label="Call Us"
      >
        <Phone size={24} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Gọi tư vấn
        </span>
      </motion.a>
    </div>
  );
}
