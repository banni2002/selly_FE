"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  const pageData = {
    rewards: {
      title: "ĐẠT GIẢI THƯỞNG SAO KHUÊ 2023",
      subtitle: "Hạng mục dành cho các sản phẩm, giải pháp khởi nghiệp số",
      description: "*Giải thưởng Sao Khuê là một giải thưởng về khoa học và công nghệ, nhằm biểu dương các doanh nghiệp, cơ quan, tập thể và cá nhân có thành tích xuất sắc đóng góp cho sự phát triển ngành công nghiệp phần mềm và công nghệ thông tin Việt Nam.",
      imageSrc: "/images/reward_saokhue.png",
      imageAlt: "Giải thưởng Sao Khuê 2023"
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 mx-auto px-4 reward transition-all duration-1000 ease-in-out"
    >
      <h2 className={`text-center mb-6 text-3xl font-bold transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {pageData.rewards.title}
      </h2>

      <p className={`text-center text-lg font-medium text-[#2D3648] mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {pageData.rewards.subtitle}
      </p>

      <p className={`text-center text-gray-500 italic mb-10 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {pageData.rewards.description}
      </p>

      <div className={`w-full rounded-xl overflow-hidden shadow-lg transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <Image 
          src={pageData.rewards.imageSrc}
          alt={pageData.rewards.imageAlt}
          width={1200}
          height={600}
          className="w-full"
        />
      </div>
    </section>
  );
}