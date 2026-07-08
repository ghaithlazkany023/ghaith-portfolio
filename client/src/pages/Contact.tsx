import Layout from "@/components/Layout";
import { WHATSAPP_NUMBER } from "@/lib/services-data";
import { Phone, Mail, Globe, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="py-16 bg-[#0f1b2d] text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا عبر أي من الوسائل التالية.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">واتساب</h3>
                <p className="text-gray-600 text-sm">+90 535 916 01 27</p>
              </div>
            </a>

            <a
              href="tel:+905359160127"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">هاتف</h3>
                <p className="text-gray-600 text-sm">+90 535 916 01 27</p>
              </div>
            </a>

            <a
              href="mailto:lazkanyal@gmail.com"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">بريد إلكتروني</h3>
                <p className="text-gray-600 text-sm">lazkanyal@gmail.com</p>
              </div>
            </a>

            <a
              href="https://ghaith.store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">الموقع</h3>
                <p className="text-gray-600 text-sm">ghaith.store</p>
              </div>
            </a>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">نموذج طلب خدمة</h2>
            <p className="text-gray-600 text-center mb-6 text-sm">
              املأ النموذج التالي وسيتم إرسال طلبك مباشرة عبر الواتساب.
            </p>
            <OrderForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function OrderForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const service = formData.get("service") as string;
    const details = formData.get("details") as string;

    const message = `مرحباً، أرغب بطلب خدمة:
━━━━━━━━━━━━━━━
الاسم: ${name}
الخدمة: ${service}
التفاصيل: ${details}
━━━━━━━━━━━━━━━`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">الاسم الكامل</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900"
          placeholder="أدخل اسمك الكامل"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">الخدمة المطلوبة</label>
        <select
          name="service"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900"
        >
          <option value="">اختر الخدمة</option>
          <option value="إصدار بطاقات دفع دولية">إصدار بطاقات دفع دولية</option>
          <option value="دفع الاشتراكات العالمية">دفع الاشتراكات العالمية</option>
          <option value="إنشاء وتفعيل حسابات PayPal">إنشاء وتفعيل حسابات PayPal</option>
          <option value="بطاقات الألعاب والشحن">بطاقات الألعاب والشحن</option>
          <option value="تحويل الأموال والمحافظ الإلكترونية">تحويل الأموال والمحافظ الإلكترونية</option>
          <option value="دفع الإعلانات الممولة">دفع الإعلانات الممولة</option>
          <option value="توثيق واتساب">توثيق واتساب</option>
          <option value="توثيق فيسبوك">توثيق فيسبوك</option>
          <option value="توثيق إنستجرام">توثيق إنستجرام</option>
          <option value="توثيق Meta Business">توثيق Meta Business</option>
          <option value="WhatsApp Business API">WhatsApp Business API</option>
          <option value="Ghaith Marketing (جوال)">Ghaith Marketing (جوال)</option>
          <option value="المرسل الذهبي (كمبيوتر)">المرسل الذهبي (كمبيوتر)</option>
          <option value="تسويق السوشال ميديا">تسويق السوشال ميديا</option>
          <option value="تسويق البريد الإلكتروني">تسويق البريد الإلكتروني</option>
          <option value="التسويق عبر التلجرام">التسويق عبر التلجرام</option>
          <option value="منصة غيث شات بوت">منصة غيث شات بوت</option>
          <option value="توليد بيانات العملاء">توليد بيانات العملاء</option>
          <option value="فتح حظر واتساب">فتح حظر واتساب</option>
          <option value="تصميم موشن جرافيك">تصميم موشن جرافيك</option>
          <option value="تصميم وبرمجة مواقع">تصميم وبرمجة مواقع</option>
          <option value="إضافة نشاط في خرائط Google">إضافة نشاط في خرائط Google</option>
          <option value="تمويل تقييمات Google Maps">تمويل تقييمات Google Maps</option>
          <option value="نشر إعلانات احترافية">نشر إعلانات احترافية</option>
          <option value="خدمة أخرى">خدمة أخرى</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">تفاصيل إضافية</label>
        <textarea
          name="details"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none text-gray-900"
          placeholder="اكتب تفاصيل طلبك هنا..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#c8a415] hover:bg-[#b8940f] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
      >
        إرسال الطلب عبر الواتساب
      </button>
    </form>
  );
}
