import { Link, useParams } from "wouter";
import { services, waLink } from "@/lib/services-data";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">الخدمة غير موجودة</h1>
          <Link href="/services" className="text-emerald-400 hover:underline">العودة إلى الخدمات</Link>
        </div>
      </Layout>
    );
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0f1b2d] to-[#162a45] text-center">
        <div className="container mx-auto px-4">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            {service.icon}
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{service.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">{service.desc}</p>
          <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
            <ArrowRight className="w-4 h-4" />
            العودة إلى {service.category}
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-[#f5f5f0]">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Description */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              وصف الخدمة
            </h2>
            <p className="text-gray-700 leading-relaxed">{service.details}</p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              الفوائد التي تحصل عليها
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              الميزات الرئيسية
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <Star className="w-4 h-4 text-[#c8a415] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8a415] hover:bg-[#b8940f] text-white font-bold py-3 px-8 rounded-lg text-center transition-all shadow-lg hover:shadow-xl"
            >
              اطلب الخدمة الآن
            </a>
            <a
              href={`https://wa.me/905359160127?text=${encodeURIComponent(`مرحباً، لدي استفسار عن خدمة: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3 px-8 rounded-lg text-center transition-all shadow-lg hover:shadow-xl"
            >
              استفسر عبر الواتساب
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-[#eaeae5]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">خدمات ذات صلة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <div key={s.slug} className={`bg-white rounded-xl p-5 border-t-4 ${s.color} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl mb-3">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-xs">{s.title}</h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{s.desc}</p>
                  <Link href={`/service/${s.slug}`} className="text-emerald-600 hover:text-emerald-700 text-xs font-bold">
                    عرض التفاصيل →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
