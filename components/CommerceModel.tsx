"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const pageData = {
    commerce: {
      title: "Mô hình thương mại",
      subtitle: "Trên nền tảng mạng xã hội của Selly",
      imageSrc: "/images/md.jpg",
      imageAlt: "Mô hình thương mại"
    }
  };

  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`py-16 mx-auto px-4 reward transition-all duration-1000 ease-in-out 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-center mb-6">
        {pageData.commerce.title}
      </h2>
      <p className="text-center text-lg font-medium text-[#2D3648] mb-4 uppercase">
        {pageData.commerce.subtitle}
      </p>
      <div className="w-full">
        <Image 
          src={pageData.commerce.imageSrc}
          alt={pageData.commerce.imageAlt}
          width={881}
          height={480}
          className={`w-full rounded-lg transition-all duration-1000 ease-in-out 
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />
      </div>
    </section>
  );
}
