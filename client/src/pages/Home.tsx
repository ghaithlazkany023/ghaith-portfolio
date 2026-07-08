import { Link } from "wouter";
import { services, categories, waLink, WHATSAPP_NUMBER } from "@/lib/services-data";
import Layout from "@/components/Layout";
import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react";

/**
 * Design: مؤسسة غيث للتسويق والتطوير
 * - Dark navy background with gold/green accents
 * - RTL Arabic layout
 * - Multiple service sections with cards
 * - Professional layout
 */

const reasons = [
  { icon: Shield, title: "أمان وموثوقية", desc: "جميع معاملاتنا مشفرة ومحمية بأعلى معايير الأمان." },
  { icon: Clock, title: "سرعة في التنفيذ", desc: "معظم خدماتنا تُنفذ خلال ساعات قليلة." },
  { icon: Users, title: "فريق محترف", desc: "خبراء متخصصون في التسويق الرقمي والتطوير." },
  { icon: Award, title: "جودة مضمونة", desc: "ضمان كامل على جميع خدماتنا." },
  { icon: Headphones, title: "دعم فني 24/7", desc: "فريق الدعم متاح على مدار الساعة." },
  { icon: Zap, title: "أسعار تنافسية", desc: "أفضل الأسعار مع أعلى معايير الجودة." },
];

export default function Home() {
  // Group services by category (show first 4 from each)
  const servicesByCategory = categories
    .filter((c) => c !== "الكل")
    .map((cat) => ({
      name: cat,
      items: services.filter((s) => s.category === cat),
    }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d] via-[#162a45] to-[#0f1b2d]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-4 py-1 rounded-full mb-6">
            مؤسسة غيث للتسويق والتطوير — أكثر من 29 خدمة رقمية
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            حلول رقمية متكاملة
            <br />
            <span className="text-emerald-400">لنجاح أعمالك</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            توثيق، تسويق، برمجة، دفع إلكتروني — كل ما تحتاجه لتطوير عملك الرقمي في مكان واحد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8a415] hover:bg-[#b8940f] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              تواصل معنا الآن
            </a>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-all border border-white/20"
            >
              تصفح الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">خدماتنا</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            نقدم أكثر من 29 خدمة رقمية متنوعة تغطي جميع احتياجاتك
          </p>

          {servicesByCategory.map((cat) => (
            <div key={cat.name} className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                {cat.name}
                <span className="text-sm text-gray-500 font-normal">({cat.items.length} خدمة)</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.slice(0, 6).map((s) => (
                  <div
                    key={s.slug}
                    className={`bg-white rounded-xl p-6 border-t-4 ${s.color} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-3">
                      {s.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h4>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{s.desc}</p>
                    <div className="flex gap-2">
                      <a
                        href={waLink(s.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all"
                      >
                        اطلب الآن
                      </a>
                      <Link
                        href={`/service/${s.slug}`}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded text-center transition-all"
                      >
                        تفاصيل
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {cat.items.length > 6 && (
                <div className="text-center mt-4">
                  <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-bold text-sm">
                    عرض جميع خدمات {cat.name} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">لماذا نحن؟</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            نقدم لك تجربة متميزة مع ضمان كامل على جميع خدماتنا
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">جاهز لبدء مشروعك الرقمي؟</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية لتحديد أفضل الحلول لنشاطك.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-all shadow-lg"
          >
            تواصل عبر الواتساب
          </a>
        </div>
      </section>
    </Layout>
  );
}
