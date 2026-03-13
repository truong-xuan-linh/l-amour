"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lan & Nam",
    date: "Tháng 10, 2025",
    text: "Thiệp cưới quá đẹp và sang trọng! Khách mời ai cũng khen nức nở. Tính năng RSVP giúp tụi mình quản lý khách mời dễ dàng hơn rất nhiều.",
    image: "https://picsum.photos/seed/couple1/150/150",
  },
  {
    name: "Mai & Tuấn",
    date: "Tháng 12, 2025",
    text: "Dịch vụ chăm sóc khách hàng tuyệt vời. Các bạn đã hỗ trợ mình custom mẫu thiệp theo đúng ý tưởng. Rất đáng tiền!",
    image: "https://picsum.photos/seed/couple2/150/150",
  },
  {
    name: "Hương & Dũng",
    date: "Tháng 2, 2026",
    text: "Giao diện thân thiện, dễ sử dụng. Mình thích nhất là tính năng thêm nhạc nền và album ảnh, làm cho thiệp cưới trở nên sống động hơn.",
    image: "https://picsum.photos/seed/couple3/150/150",
  },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 bg-cream/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">
            Đánh giá từ khách hàng
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hạnh phúc được lan tỏa
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Hàng ngàn cặp đôi đã tin tưởng lựa chọn L&apos;Amour Link để gửi gắm
            lời mời trong ngày trọng đại.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative mt-12"
            >
              <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-10 mb-4 flex gap-1 text-champagne">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 font-light italic leading-relaxed mb-6 flex-grow">
                &quot;{review.text}&quot;
              </p>
              <div>
                <h4 className="font-playfair font-bold text-gray-900 text-lg">
                  {review.name}
                </h4>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-champagne mb-2">
                2k+
              </h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-xs">
                Thiệp đã tạo
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-sage mb-2">
                50+
              </h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-xs">
                Mẫu thiết kế
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-champagne mb-2">
                99%
              </h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-xs">
                Hài lòng
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-sage mb-2">
                24/7
              </h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-xs">
                Hỗ trợ
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
