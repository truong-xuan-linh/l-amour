"use client";

import { motion } from "motion/react";
import { CalendarCheck, MapPin, Music, Smartphone } from "lucide-react";

const features = [
  {
    icon: <CalendarCheck size={32} strokeWidth={1.5} />,
    title: "RSVP Thông minh",
    description:
      "Theo dõi danh sách khách mời thời gian thực, tự động tổng hợp số lượng tham dự và lời chúc.",
  },
  {
    icon: <MapPin size={32} strokeWidth={1.5} />,
    title: "Tích hợp Bản đồ & Lịch",
    description:
      'Chỉ đường Google Maps chính xác và tính năng "Save the date" tự động thêm vào lịch của khách.',
  },
  {
    icon: <Music size={32} strokeWidth={1.5} />,
    title: "Nhạc nền & Album ảnh",
    description:
      "Tạo không gian kỷ niệm riêng với bản nhạc yêu thích và thư viện ảnh cưới chất lượng cao.",
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    title: "Tương thích mọi thiết bị",
    description:
      "Thiết kế Responsive hiển thị hoàn hảo và mượt mà trên cả điện thoại iOS, Android và máy tính.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-cream/50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">
            Tại sao chọn chúng tôi?
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hơn cả một lời mời
          </h2>
          <p className="text-gray-600 text-lg font-light">
            L&apos;Amour Link mang đến trải nghiệm thiệp cưới kỹ thuật số toàn
            diện, kết hợp giữa thiết kế nghệ thuật và công nghệ hiện đại.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-champagne mb-6 group-hover:scale-110 group-hover:bg-champagne group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
