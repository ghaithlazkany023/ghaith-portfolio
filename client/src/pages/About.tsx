import Layout from "@/components/Layout";
import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react";

const reasons = [
  { icon: Shield, title: "أمان وموثوقية", desc: "جميع معاملاتنا مشفرة ومحمية. نضمن لك سرية تامة وأمان كامل لبياناتك." },
  { icon: Clock, title: "سرعة في التنفيذ", desc: "نلتزم بتسليم الخدمات في أسرع وقت ممكن. معظم خدماتنا تُنفذ خلال ساعات." },
  { icon: Users, title: "فريق محترف", desc: "فريقنا يتكون من خبراء متخصصين في التسويق الرقمي والتطوير." },
  { icon: Award, title: "جودة مضمونة", desc: "نقدم ضمان كامل على جميع خدماتنا. إذا لم تكن راضياً، نعيد لك أموالك." },
  { icon: Headphones, title: "دعم فني 24/7", desc: "فريق الدعم متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك." },
  { icon: Zap, title: "أسعار تنافسية", desc: "نقدم أفضل الأسعار في السوق مع الحفاظ على أعلى معايير الجودة." },
];

export default function About() {
  return (
    <Layout>
      <section className="py-16 bg-[#0f1b2d] text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">لماذا نحن؟</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            مؤسسة غيث للتسويق والتطوير — شريكك الموثوق في عالم التسويق الرقمي والخدمات الإلكترونية.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">من نحن</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            مؤسسة غيث للتسويق والتطوير هي مؤسسة رائدة في مجال التسويق الرقمي والخدمات الإلكترونية. نقدم حلولاً متكاملة للأفراد والشركات تشمل خدمات الدفع والاشتراكات، التوثيق الرسمي، البرامج التسويقية المتقدمة، تصميم وبرمجة المواقع والتطبيقات، ونشر الإعلانات الاحترافية.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            نفتخر بخدمة أكثر من 5000 عميل في الوطن العربي والعالم، ونسعى دائماً لتقديم أفضل الخدمات بأعلى جودة وأسرع وقت وأنسب سعر.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-emerald-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-emerald-600">+5000</div>
              <div className="text-sm text-gray-600">عميل راضٍ</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-emerald-600">+29</div>
              <div className="text-sm text-gray-600">خدمة متنوعة</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-gray-600">دعم متواصل</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
