import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "905359160127";
  const defaultMessage = "مرحباً! كيف يمكنني مساعدتك؟";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* WhatsApp Widget Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-sm">Ghaith Lazkani</h3>
                  <p className="text-xs text-green-100">نحن هنا للمساعدة</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="bg-green-100 text-gray-800 rounded-lg rounded-tl-none p-3 max-w-xs text-sm">
                    <p>مرحباً بك! 👋</p>
                    <p className="mt-2">كيف يمكنني مساعدتك اليوم؟</p>
                  </div>
                </div>

                {/* Quick Replies */}
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-left bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50 p-2 rounded-lg text-sm transition-all text-gray-700 font-medium"
                  >
                    💼 استفسار عن الخدمات
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-left bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50 p-2 rounded-lg text-sm transition-all text-gray-700 font-medium"
                  >
                    📞 طلب عرض سعر
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-left bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50 p-2 rounded-lg text-sm transition-all text-gray-700 font-medium"
                  >
                    ❓ سؤال عام
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-white rounded-b-2xl">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2.5 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ابدأ المحادثة
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                نرد عليك في أسرع وقت
              </p>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center group relative"
        >
          <MessageCircle className="w-6 h-6" />

          {/* Pulse Animation */}
          <span className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></span>

          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            تحدث معنا
          </span>
        </button>
      </div>
    </>
  );
}
