import { MessageCircle, ArrowRight, Shield, Zap, Headphones, DollarSign, Wrench, CheckCircle } from "lucide-react";

/**
 * Design: مؤسسة غيث للتسويق والتطوير
 * - Dark navy background with gold/green accents
 * - RTL Arabic layout
 * - Multiple service sections with cards
 * - WhatsApp floating button
 * - Professional footer
 */

const WHATSAPP_NUMBER = "905359160127";
const waLink = (service: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مرحباً، أرغب بطلب خدمة: ${service}`)}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1b2d] text-white" dir="rtl">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0f1b2d]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              غ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">مؤسسة غيث</span>
              <span className="text-xs text-gray-400">للتسويق والتطوير</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#hero" className="text-white hover:text-emerald-400 transition-colors">الرئيسية</a>
            <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">الخدمات</a>
            <a href="#why-us" className="text-gray-300 hover:text-emerald-400 transition-colors">لماذا نحن</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">تواصل</a>
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

      {/* Hero Section */}
      <section id="hero" className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d] via-[#162a45] to-[#0f1b2d]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            نجاحك الرقمي يبدأ من
            <br />
            <span className="text-emerald-400">مؤسسة غيث</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            وجهتك الاحترافية لخدمات التوثيق الرسمي، البرامج التسويقية، تصميم وبرمجة المواقع والمتاجر والتطبيقات، ونشر الإعلانات الفعّالة.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#services" className="bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#0f1b2d] transition-all font-semibold">
              تصفح الخدمات
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#0f1b2d] transition-all font-semibold">
              أطلب الآن
            </a>
          </div>
        </div>
      </section>

      {/* خدمات الدفع والاشتراكات */}
      <section id="services" className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full mb-3">✨ جديد — حلول مالية متكاملة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">خدمات الدفع والاشتراكات</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            بطاقات دفع دولية، دفع الاشتراكات العالمية، تحويل الأموال وأكثر — كل ما تحتاجه من حلول مالية رقمية في مكان واحد بأمان وسرعة.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "💳", title: "إصدار بطاقات دفع دولية (Visa / Mastercard)", desc: "بطاقات افتراضية وفيزيائية مقبولة عالمياً للشراء والدفع عبر الإنترنت بأمان تام.", color: "border-t-blue-500" },
              { icon: "🔁", title: "دفع الاشتراكات العالمية (Netflix، Spotify، ChatGPT وغيرها)", desc: "ندفع عنك اشتراكات المنصات العالمية بأسعار منافسة وتفعيل فوري مضمون.", color: "border-t-orange-500" },
              { icon: "P", title: "إنشاء وتفعيل حسابات PayPal", desc: "حسابات PayPal موثوقة ومفعّلة بالكامل للإرسال والاستقبال والشراء الآمن.", color: "border-t-indigo-500" },
              { icon: "🎮", title: "بطاقات الألعاب والشحن (شحن شدات، جواهر، بطاقات رقمية)", desc: "شحن فوري لجميع الألعاب وبطاقات رقمية لجميع المتاجر بأفضل الأسعار.", color: "border-t-purple-500" },
              { icon: "💸", title: "تحويل الأموال والمحافظ الإلكترونية", desc: "تحويل آمن وسريع بين المحافظ الإلكترونية والبنوك الرقمية حول العالم.", color: "border-t-green-500" },
              { icon: "📊", title: "دفع الإعلانات الممولة (Meta، Google، TikTok)", desc: "نموّل حملاتك الإعلانية على جميع المنصات بحسابات إعلانية موثوقة.", color: "border-t-red-500" },
            ].map((s, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 border-t-4 ${s.color} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
                <div className="flex gap-2">
                  <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                  <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <span>🔒 معاملات آمنة وموثوقة</span>
            <span>⚡ تنفيذ فوري خلال دقائق</span>
            <span>💬 دعم مباشر على مدار الساعة</span>
          </div>
        </div>
      </section>

      {/* خدمات التوثيق */}
      <section className="py-16 bg-[#eaeae5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">خدمات التوثيق</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { icon: "💬", title: "توثيق أرقام وقنوات الواتساب بالعلامة الزرقاء", desc: "علامة التوثيق الرسمية ✔️ على رقم أو قناة الواتساب لحماية واحترافية كاملة.", color: "border-t-green-500" },
              { icon: "f", title: "توثيق صفحات وحسابات فيسبوك بالعلامة الزرقاء", desc: "توثيق رسمي لصفحات وحسابات Facebook التجارية والشخصية.", color: "border-t-blue-600" },
              { icon: "📷", title: "توثيق حسابات إنستجرام بالعلامة الزرقاء", desc: "وثّق حسابك في Instagram وانطلق نحو النجومية باحترافية كاملة.", color: "border-t-pink-500" },
              { icon: "M", title: "توثيق حافظة أعمال Meta (Business Manager)", desc: "تحقق رسمي لحافظة أعمالك في Meta لإدارة إعلاناتك باحترافية.", color: "border-t-indigo-500" },
            ].map((s, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 border-t-4 ${s.color} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
                <div className="flex gap-2">
                  <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                  <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-1 max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 border-t-4 border-t-emerald-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">توثيق WhatsApp Business API وربطه بمزود معتمد</h3>
              <p className="text-gray-600 text-xs mb-4">حوّل الواتساب إلى أداة بيع عالمية موثوقة مع API الرسمي.</p>
              <div className="flex gap-2">
                <a href={waLink("توثيق WhatsApp Business API")} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* البرامج التسويقية */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">البرامج التسويقية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "Ghaith Marketing — تسويق واتساب من الجوال", desc: "التطبيق الأول في الوطن العربي للتسويق على الواتساب من الجوال." },
              { icon: "💻", title: "المرسل الذهبي — تسويق واتساب من الكمبيوتر", desc: "أول وأفضل تطبيق سطح مكتب للتسويق على الواتساب بنظام الشات بوت." },
              { icon: "🌐", title: "تسويق فيسبوك وإنستجرام وتويتر من منصة واحدة", desc: "صمّم حملاتك وتفاعل مع جمهورك من لوحة موحدة." },
              { icon: "✉", title: "تسويق البريد الإلكتروني الاحترافي", desc: "أرسل آلاف الرسائل بتصاميم جذابة وتقارير مفصّلة." },
              { icon: "✈", title: "التسويق عبر التلجرام", desc: "أنشئ قنوات قوية وأرسل محتوى مؤثر بنقرة زر." },
              { icon: "🤖", title: "منصة غيث شات بوت", desc: "بوتات ذكية ترد تلقائياً بأزرار تفاعلية وسحابة متطورة." },
              { icon: "🔍", title: "توليد أرقام الشركات وبيانات العملاء", desc: "استخرج بيانات عملاء محتملين من خرائط جوجل ومنصات التواصل." },
              { icon: "🔓", title: "فتح الحظر عن أرقام الواتساب", desc: "استعد تشغيل الأرقام المحظورة باستخدام الذكاء الاصطناعي." },
              { icon: "📊", title: "كشف قوة وتنشيط أرقام الواتساب", desc: "حلّل أداء أرقامك ونشّط الجديدة منها لحملات آمنة." },
              { icon: "🚀", title: "GL MARKETING — النشر في الجروبات", desc: "انشر عروضك في عشرات الجروبات مع منشن تلقائي لجميع الأعضاء." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-t-4 border-t-emerald-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
                <div className="flex gap-2">
                  <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                  <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* خدمات واتساب المتميزة */}
      <section className="py-16 bg-[#eaeae5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">خدمات واتساب المتميزة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔄", title: "بيع وشراء قنوات الواتساب", desc: "نوفّر لك أفضل قنوات الواتساب بمتابعين حقيقيين، أو نسوّق قناتك للبيع." },
              { icon: "📈", title: "تمويل متابعين قنوات الواتساب وفيسبوك وإنستجرام", desc: "زيادة حقيقية للمتابعين لقنواتك وحساباتك على جميع المنصات." },
              { icon: "🏆", title: "تمويل الأصوات في مسابقات قنوات الواتساب", desc: "اضمن فوزك في المسابقات بتصويت احترافي ومنظّم." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-t-4 border-t-yellow-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
                <div className="flex gap-2">
                  <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                  <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* التصميم والبرمجة */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">التصميم والبرمجة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎥", title: "تصميم فيديوهات موشن جرافيك احترافية", desc: "فيديوهات تسويقية وموشن جرافيك تجذب الانتباه وتبيع منتجاتك." },
              { icon: "🖥", title: "تصميم وبرمجة المواقع والمتاجر والتطبيقات", desc: "مواقع ومتاجر إلكترونية وتطبيقات جوال احترافية تلائم نشاطك." },
              { icon: "📍", title: "إضافة النشاط التجاري في خرائط Google", desc: "اجعل عملاءك يجدونك على خرائط جوجل بسهولة." },
              { icon: "⭐", title: "تمويل التقييمات على Google Maps", desc: "تقييمات إيجابية حقيقية ترفع ترتيب نشاطك وثقة عملائك." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-t-4 border-t-cyan-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs mb-4">{s.desc}</p>
                <div className="flex gap-2">
                  <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                  <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نشر الإعلانات */}
      <section className="py-16 bg-[#eaeae5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">نشر الإعلانات</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 border-t-4 border-t-red-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl mb-3">📣</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">خدمة نشر الإعلانات الاحترافية</h3>
              <p className="text-gray-600 text-xs mb-4">نعزز وصولك للجمهور المستهدف بأساليب فعّالة وعصرية.</p>
              <div className="flex gap-2">
                <a href={waLink("خدمة نشر الإعلانات الاحترافية")} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#c8a415] hover:bg-[#b8940f] text-white text-xs font-bold py-2 px-3 rounded text-center transition-all">اطلب الآن</a>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded transition-all">تفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* لماذا نحن */}
      <section id="why-us" className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">خدماتنا</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Wrench className="w-6 h-6 text-emerald-600" />, title: "خبرة تقنية", desc: "فريق محترف مع خبرة واسعة لتنفيذ مشاريعك بأعلى جودة." },
              { icon: <Zap className="w-6 h-6 text-emerald-600" />, title: "سرعة في التنفيذ", desc: "ننجز خدماتك بأسرع وقت ممكن دون المساومة على الجودة." },
              { icon: <Shield className="w-6 h-6 text-emerald-600" />, title: "ضمان حقيقي", desc: "خدماتنا مضمونة وتلتزم بأعلى معايير الاحترافية والثقة." },
              { icon: <DollarSign className="w-6 h-6 text-emerald-600" />, title: "أسعار تنافسية", desc: "أسعار مدروسة تناسب مختلف الميزانيات بلا مفاجآت." },
              { icon: <Headphones className="w-6 h-6 text-emerald-600" />, title: "دعم مباشر", desc: "دعم فني متواصل عبر الواتساب طوال الأسبوع." },
              { icon: <CheckCircle className="w-6 h-6 text-emerald-600" />, title: "تكامل شامل", desc: "حلول متكاملة من التوثيق إلى التسويق والبرمجة." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f1b2d] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">جاهز للانطلاق؟</h2>
          <p className="text-gray-300 mb-8">ابدأ معنا اليوم ودعنا نساعدك على تحقيق نجاح حقيقي يليق بطموحك.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all"
          >
            أطلب الآن
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-[#0a1220] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
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

            {/* الأقسام */}
            <div>
              <h4 className="font-bold text-white mb-4">الأقسام</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">خدمات الدفع والاشتراكات</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">خدمات التوثيق</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">البرامج التسويقية</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">خدمات واتساب المتميزة</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">التصميم والبرمجة</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">نشر الإعلانات</a></li>
              </ul>
            </div>

            {/* تواصل */}
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
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-bold hidden md:inline">تواصل عبر الواتساب</span>
      </a>
    </div>
  );
}
