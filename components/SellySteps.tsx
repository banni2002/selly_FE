"use client";

import { Download } from "lucide-react";
import React, { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftVisible = useInView(leftRef);
  const isRightVisible = useInView(rightRef);

  const sellyData = {
    hero: {
      title: "Bán hàng dễ dàng",
      subtitle: "tăng thu nhập lên đến",
      amount: "10.000.000đ!",
      videoUrl: "https://www.youtube.com/embed/Q6RoeAXUlXo",
      videoTitle: "Hướng dẫn bán hàng trên Selly",
      buttonText: "TẢI APP NGAY"
    },
    steps: {
      title: "4 BƯỚC BÁN HÀNG TIỀN VỀ LIỀN TAY",
      items: [
        {
          id: 1,
          text: "Khám phá hơn <span class='font-bold'>83.100+</span> sản phẩm và lựa chọn mặt hàng bạn muốn kinh doanh"
        },
        {
          id: 2,
          text: "Đăng bán sản phẩm qua mạng xã hội hoặc gửi cho khách hàng tiềm năng của bạn"
        },
        {
          id: 3,
          text: "Tạo đơn hàng trên ứng dụng. Selly sẽ giúp bạn vận chuyển đến khách hàng"
        },
        {
          id: 4,
          text: "Nhận hoa hồng và rút tiền về tài khoản ngân hàng"
        }
      ]
    },
    theme: {
      primary: "#384059",
      secondary: "#cc3366",
      secondaryHover: "#B83280"
    }
  };

  return (
    <section className={`bg-[#384059] text-white py-16`}>
      <div className="max-w-[1200px] mx-auto px-4 selly-steps">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            ref={leftRef}
            className={`bg-white rounded-lg p-8 text-center transition-all duration-1000 ease-in-out 
            ${isLeftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <h2 className={`text-[${sellyData.theme.primary}] text-2xl font-bold mb-2`}>
              {sellyData.hero.title}
            </h2>
            <p className={`text-[${sellyData.theme.primary}] mb-2`}>
              {sellyData.hero.subtitle}
            </p>
            <p className={`text-[${sellyData.theme.primary}] text-3xl font-bold mb-6`}>
              {sellyData.hero.amount}
            </p>
            
            <div className="relative aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={sellyData.hero.videoUrl}
                title={sellyData.hero.videoTitle}
                className="absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button className={`w-full bg-[${sellyData.theme.secondary}] text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[${sellyData.theme.secondaryHover}] transition-colors`}>
              {sellyData.hero.buttonText}<Download className="w-5 h-5" />
            </button>
          </div>
          <div
            ref={rightRef}
            className={`transition-all duration-1000 ease-in-out 
            ${isRightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <img src="/images/ic-play.svg" alt="Logo" className="h-152 w-65 logo" />
              {sellyData.steps.title}
            </h2>
            <div className="space-y-8">
              {sellyData.steps.items.map((step) => (
                <div key={step.id} className="flex items-center gap-4">
                  <input type="radio" name="radio-steps" className="accent-[#50A4FD] radio-steps" />
                  <p className="text-lg" dangerouslySetInnerHTML={{ __html: step.text }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
