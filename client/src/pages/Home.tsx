import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MapPin, Clock, MessageSquare, Facebook, Instagram, Settings, Lock, CreditCard, Smartphone, ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Modern Professional Minimalist
 * - Clean, professional layout with deep blue (#1E40AF) and teal (#14B8A6) accents
 * - Hero section with professional profile image
 * - Service cards with icons and descriptions
 * - Clear call-to-action for WhatsApp contact
 */

export default function Home() {
  const services = [
    // الخدمات الجديدة (الأربع الأولى)
    {
      title: "توثيق واتساب",
      description: "توثيق أرقام وقنوات الواتساب بالعلامة الزرقاء",
      Icon: MessageSquare,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "توثيق فيسبوك",
      description: "توثيق صفحات وحسابات فيسبوك بالعلامة الزرقاء",
      Icon: Facebook,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "توثيق إنستجرام",
      description: "توثيق حسابات إنستجرام بالعلامة الزرقاء",
      Icon: Instagram,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "توثيق Meta Business",
      description: "توثيق حافظة أعمال Meta للإدارة الاحترافية",
      Icon: Settings,
      color: "from-green-500 to-emerald-600",
    },
    // الخدمات الأصلية
    {
      title: "خدمات التوثيق التجاري",
      description: "التوثيق التجاري والهوية الرقمية المتقدمة",
      Icon: Lock,
      color: "from-indigo-600 to-indigo-700",
    },
    {
      title: "حلول الدفع الإلكتروني",
      description: "حلول الدفع الإلكتروني والاشتراكات العالمية",
      Icon: CreditCard,
      color: "from-cyan-600 to-cyan-700",
    },
    {
      title: "إدارة الأعمال الرقمية",
      description: "خدمات السوشيال ميديا وإدارة الأعمال الرقمية",
      Icon: Smartphone,
      color: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            <span className="font-bold text-lg text-foreground">Ghaith</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              الخدمات
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              التواصل
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-1 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-1 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="/manus-storage/suleiman_natural_profile.png"
                  alt="Ghaith Lazkani"
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ghaith Lazkani
              </h1>
              <p className="text-xl text-muted-foreground mb-2 font-medium">
                Digital Solutions & Business Services
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                حلول رقمية متكاملة للتوثيق التجاري والدفع الإلكتروني وإدارة الأعمال
              </p>

              {/* Key Features */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Open 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Syria</span>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://wa.me/905359160127" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  تواصل عبر الواتس
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              الخدمات المقدمة
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              نقدم حلولاً رقمية متكاملة وشاملة تغطي التوثيق والدفع الإلكتروني وإدارة الأعمال الرقمية بأعلى معايير الاحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const { Icon } = service;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer group flex flex-col`}
                >
                  <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex-grow">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex gap-3 pt-4 border-t border-white/20">
                    <button className="flex-1 bg-white text-gray-900 font-bold py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
                      اطلب الآن
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-2.5 px-4 rounded-lg transition-all">
                      تفاصيل
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            تواصل معنا
          </h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا عبر أي من القنوات التالية
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/905359160127"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-8 rounded-xl transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100">+90 535 916 01 27</p>
            </a>

            {/* Email */}
            <a
              href="mailto:lazkanyal@gmail.com"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-8 rounded-xl transition-all hover:shadow-lg"
            >
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-100">lazkanyal@gmail.com</p>
            </a>

            {/* Website */}
            <a
              href="https://ghaith.store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-8 rounded-xl transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 text-white mx-auto mb-4 flex items-center justify-center text-2xl">
                🌐
              </div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <p className="text-blue-100">ghaith.store</p>
            </a>
          </div>

          <a href="https://wa.me/905359160127" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              ابدأ المحادثة الآن
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-300">
                © 2026 Ghaith Lazkani. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://wa.me/905359160127"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:lazkanyal@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://ghaith.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
