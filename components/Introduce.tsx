"use client";

import React, { useRef } from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRefs = [useRef(null), useRef(null), useRef(null)];

  const isLeftVisible = useInView(leftRef);
  const isRightVisible = useInView(rightRef);
  const statsVisible = statsRefs.map((ref) => useInView(ref));

  const pageData = {
    introduce: {
      heading: "BÁN HÀNG ONLINE\nKHÔNG CẦN BỎ VỐN",
      subheading: "Kiếm tiền tại nhà đến",
      incomeHighlight: "10.000.000đ",
      timePeriod: "/tháng",
      buttonText: "TẢI APP NGAY",
      videoUrl: "https://www.youtube.com/embed/E-PhOVv5drU",
      videoTitle: "Hướng dẫn kiếm tiền cùng Selly",
    },
    stats: [
      {
        icon: "/images/ic-statistic-1.svg",
        iconAlt: "Dollar Sign",
        number: "113.200+",
        description: "Seller có thu nhập với Selly",
      },
      {
        icon: "/images/ic-statistic-2.svg",
        iconAlt: "Factory",
        number: "1.170+",
        description: "Nhà sản xuất",
      },
      {
        icon: "/images/ic-statistic-3.svg",
        iconAlt: "Package",
        number: "83.100+",
        description: "Sản phẩm giá sỉ",
      },
    ],
  };

  return (
    <section className="introduce">
      <div className="introduce-container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            ref={leftRef}
            className={`flex-1 text-white left transition-all duration-1000 ease-in-out
              ${isLeftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <Image src="/images/Logo-tripc.png" alt="Logo TripC" width={300} height={122} />
            <h1 className="font-extrabold">{pageData.introduce.heading}</h1>
            <p className="mb-8">
              {pageData.introduce.subheading}{" "}
              <span className="font-bold">{pageData.introduce.incomeHighlight}</span>
              {pageData.introduce.timePeriod}
            </p>
            <Button
              size="lg"
              className="button-cta"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/vn/app/selly-d%E1%BB%85-d%C3%A0ng-b%C3%A1n-h%C3%A0ng/id1554981586",
                  "_blank"
                )
              }
            >
              {pageData.introduce.buttonText}
              <Download className="mr-2 h-5 w-5" />
            </Button>
          </div>

          <div
            ref={rightRef}
            className={`flex-1 right transition-all duration-1000 ease-in-out
              ${isRightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src={pageData.introduce.videoUrl}
                title={pageData.introduce.videoTitle}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="introduce-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 card-stars">
          {pageData.stats.map((stat, index) => (
            <div
              key={index}
              ref={statsRefs[index]}
              className={`bg-white rounded-lg text-center card transition-all duration-1000 ease-in-out
                ${statsVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <img src={stat.icon} alt={stat.iconAlt} className="h-12 w-12" />
              </div>
              <h2 className="mb-2">{stat.number}</h2>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
