"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    style: "Cổ điển",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
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

          {/* Right Side */}
          <div className="p-10 md:w-3/5 flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center py-8"
                >
                  <CheckCircle className="mx-auto mb-4 text-sage" size={52} strokeWidth={1.5} />
                  <h4 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                    Đã nhận thông tin!
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    Cảm ơn <strong className="text-gray-700">{formData.name}</strong>.<br />
                    Chúng tôi sẽ liên hệ qua số <strong className="text-gray-700">{formData.phone}</strong> trong thời gian sớm nhất.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 w-full"
                >
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
                        <option value="Sang trọng">Sang trọng (Luxury)</option>
                        <option value="Tối giản">Tối giản (Minimalist)</option>
                        <option value="Thể thao">Thể thao (Sport)</option>
                        <option value="Độc đáo">Độc đáo / Sáng tạo</option>
                        <option value="Chưa xác định">Chưa xác định</option>
                      </select>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">
                      Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-champagne transition-colors flex items-center justify-center gap-2 group mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <>
                        <span>Nhận tư vấn miễn phí</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
