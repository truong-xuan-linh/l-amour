"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const contacts = [
  {
    href: "https://zalo.me/your-zalo-id",
    label: "Chat qua Zalo",
    bg: "bg-[#0068FF] hover:bg-[#0055D4]",
    icon: <span className="font-bold text-xl leading-none">Z</span>,
    external: true,
  },
  {
    href: "https://m.me/1114782695047827",
    label: "Chat qua Messenger",
    bg: "bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] hover:opacity-90",
    icon: <MessageCircle size={24} fill="currentColor" />,
    external: true,
  },
  {
    href: "tel:0354693885",
    label: "Gọi tư vấn",
    bg: "bg-champagne hover:bg-champagne/90",
    icon: <Phone size={22} fill="currentColor" />,
    external: false,
  },
];

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Sub-buttons — appear above main button */}
      <AnimatePresence>
        {isOpen &&
          contacts.map((btn, i) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ delay: i * 0.06, duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <span className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
                {btn.label}
              </span>
              <a
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className={`w-12 h-12 ${btn.bg} rounded-full shadow-lg flex items-center justify-center text-white transition-all`}
                aria-label={btn.label}
              >
                {btn.icon}
              </a>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((v) => !v)}
        className="w-14 h-14 bg-champagne rounded-full shadow-xl flex items-center justify-center text-white"
        aria-label="Liên hệ"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
