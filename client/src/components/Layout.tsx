import { Link } from "wouter";
import { WHATSAPP_NUMBER } from "@/lib/services-data";
import { MessageCircle } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f1b2d] text-white" dir="rtl">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0f1b2d]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              غ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">مؤسسة غيث</span>
              <span className="text-xs text-gray-400">للتسويق والتطوير</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">الرئيسية</Link>
            <Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">الخدمات</Link>
            <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">لماذا نحن</Link>
            <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">تواصل</Link>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-[#0f1b2d] transition-all"
          >
            أطلب الآن
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-12 bg-[#0a1220] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">غ</div>
                <div>
                  <div className="font-bold text-white">مؤسسة غيث</div>
                  <div className="text-xs text-gray-400">للتسويق والتطوير</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                مؤسسة غيث للتسويق والتطوير — توثيق Whatsapp و Instagram و Facebook، البرامج التسويقية، تصميم وبرمجة المواقع والمتاجر والتطبيقات، ونشر الإعلانات.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">الأقسام</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">خدمات الدفع والاشتراكات</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">خدمات التوثيق</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">البرامج التسويقية</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">خدمات واتساب المتميزة</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">التصميم والبرمجة</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">نشر الإعلانات</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">تواصل معنا</h4>
              <p className="text-gray-400 text-sm mb-3">نحن متاحون لتلبية طلباتك على الواتساب:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="tel:+905359160127" className="hover:text-emerald-400 transition-colors">📱 +90 535 916 01 27</a></li>
                <li><a href="mailto:lazkanyal@gmail.com" className="hover:text-emerald-400 transition-colors">✉️ lazkanyal@gmail.com</a></li>
                <li><a href="https://ghaith.store" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">🌐 ghaith.store</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
            © 2026 مؤسسة غيث للتسويق والتطوير. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2"
      >
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">1</span>
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-bold hidden md:inline">تواصل عبر الواتساب</span>
      </a>
    </div>
  );
}
