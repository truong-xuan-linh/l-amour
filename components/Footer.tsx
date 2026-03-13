import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#" className="inline-block mb-6">
              <span className="font-playfair text-3xl font-bold tracking-wider text-champagne">
                L&apos;Amour Link
              </span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Gói trọn khoảnh khắc hạnh phúc vào một điểm chạm. Nền tảng tạo
              thiệp cưới online sang trọng, tinh tế và mang đậm dấu ấn cá nhân.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-champagne hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-champagne hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-champagne hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-white">
              Khám phá
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#templates"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Mẫu thiệp cưới
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Tính năng nổi bật
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Hướng dẫn tạo thiệp
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Đánh giá khách hàng
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Bảng giá
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-white">
              Hỗ trợ
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Câu hỏi thường gặp (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-champagne transition-colors font-light"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-white">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-champagne shrink-0 mt-1" />
                <span className="text-gray-400 font-light">
                  Đường Nguyễn Lâm, Phường Gia Định, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-champagne shrink-0" />
                <span className="text-gray-400 font-light">0354693885</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-champagne shrink-0" />
                <span className="text-gray-400 font-light">
                  lamourlink@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} L&apos;Amour Link. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm font-light">
              Thiết kế với <span className="text-champagne">♥</span> tại Việt
              Nam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
