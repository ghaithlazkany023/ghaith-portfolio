import { useState } from "react";
import { Link } from "wouter";
import { services, categories, waLink } from "@/lib/services-data";
import Layout from "@/components/Layout";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered = activeCategory === "الكل"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <Layout>
      <section className="py-16 bg-[#0f1b2d] text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">خدماتنا</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            تصفح جميع خدمات مؤسسة غيث للتسويق والتطوير واختر ما يناسب نشاطك.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div
                key={s.slug}
                className={`bg-white rounded-xl p-6 border-t-4 ${s.color} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-3">
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
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
        </div>
      </section>
    </Layout>
  );
}
