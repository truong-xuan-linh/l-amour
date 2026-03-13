"use client";

import { motion } from "motion/react";
import { Palette, Image as ImageIcon, PenTool, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Palette size={40} strokeWidth={1} />,
    title: "Chọn mẫu ý tưởng",
    description: "Khám phá bộ sưu tập và chọn phong cách phù hợp với đám cưới của bạn.",
  },
  {
    icon: <ImageIcon size={40} strokeWidth={1} />,
    title: "Gửi nội dung & hình ảnh",
    description: "Cung cấp thông tin, câu chuyện tình yêu và album ảnh cưới cho đội ngũ thiết kế.",
  },
  {
    icon: <PenTool size={40} strokeWidth={1} />,
    title: "Tinh chỉnh & Cá nhân hóa",
    description: "Chúng tôi sẽ thiết kế, điều chỉnh màu sắc, font chữ và các tính năng theo yêu cầu.",
  },
  {
    icon: <Send size={40} strokeWidth={1} />,
    title: "Bàn giao website",
    description: "Nhận link website duy nhất, sẵn sàng gửi đến khách mời của bạn.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">
            Quy trình làm việc
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Đơn giản & Nhanh chóng
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Sở hữu một website thiệp cưới mang đậm dấu ấn cá nhân chưa bao giờ dễ dàng đến thế. Chỉ với 4 bước đơn giản, bạn đã có ngay một tấm thiệp ấn tượng để gửi đến khách mời.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-sage/30 to-transparent z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-cream flex items-center justify-center text-champagne mb-8 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-bold text-sm shadow-md">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed max-w-xs text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="#contact" className="inline-block px-10 py-4 bg-champagne text-white rounded-full font-medium text-lg hover:bg-champagne/90 transition-all shadow-lg hover:shadow-xl">
            Nhận tư vấn thiết kế
          </Link>
        </div>
      </div>
    </section>
  );
}
