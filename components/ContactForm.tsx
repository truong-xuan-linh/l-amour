"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    style: "Cổ điển",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ sớm nhất!");
  };

  return (
    <section id="contact" className="py-24 bg-sage/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Info */}
          <div className="bg-champagne text-white p-10 md:w-2/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Bắt đầu câu chuyện của bạn
              </h3>
              <p className="font-light text-white/90 mb-8 leading-relaxed">
                Để lại thông tin để đội ngũ L&apos;Amour Link tư vấn và thiết kế riêng cho bạn một website thiệp cưới hoàn hảo nhất.
              </p>
              <div className="space-y-4 font-light text-sm">
                <p>✨ Thiết kế độc bản</p>
                <p>✨ Hỗ trợ tận tình 24/7</p>
                <p>✨ Chỉnh sửa không giới hạn</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-10 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Tên của bạn *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-champagne focus:ring-2 focus:ring-champagne/20 outline-none transition-all"
                  placeholder="VD: Minh & Anh"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-champagne focus:ring-2 focus:ring-champagne/20 outline-none transition-all"
                  placeholder="09xx xxx xxx"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Ngày cưới dự kiến
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-champagne focus:ring-2 focus:ring-champagne/20 outline-none transition-all text-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                    Phong cách yêu thích
                  </label>
                  <select
                    id="style"
                    value={formData.style}
                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-champagne focus:ring-2 focus:ring-champagne/20 outline-none transition-all text-gray-600 bg-white"
                  >
                    <option value="Cổ điển">Cổ điển (Vintage)</option>
                    <option value="Hiện đại">Hiện đại (Modern)</option>
                    <option value="Floral">Hoa cỏ (Floral)</option>
                    <option value="Minimalist">Tối giản (Minimalist)</option>
                    <option value="Chưa xác định">Chưa xác định</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-champagne transition-colors flex items-center justify-center gap-2 group mt-4"
              >
                <span>Nhận tư vấn miễn phí</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
