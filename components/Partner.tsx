"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" },
  { name: "Thắng Giang", logo: "thang-giang.png" }
];

export default function PartnerShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 24;
  const totalSlides = Math.ceil(partners.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // 👀 Dùng ref để kiểm tra khi nào phần tử vào màn hình
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-6 lg:px-8 overflow-hidden container mx-auto partners">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          CÁC THƯƠNG HIỆU ĐỒNG HÀNH CÙNG SELLY
        </motion.h2>
        <div className="relative">
        <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-11"
            aria-label="Previous slide"
          >
            <img src="/images/ic-carousel-left.svg" alt="Package" className="h-12 w-12" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              animate={isInView ? { translateX: `-${currentSlide * 100}%` } : {}}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="mx-auto flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: slideIndex * 0.2 }}
                    className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6"
                  >
                    {partners
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((partner, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="aspect-square flex items-center justify-center card"
                        >
                          <Image
                            src={`/images/partners/${partner.logo}`}
                            alt={partner.name}
                            width={95}
                            height={95}
                            className="object-contain"
                          />
                        </motion.div>
                      ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-11"
            aria-label="Next slide"
          >
            <img src="/images/ic-carousel-right.svg" alt="Package" className="h-12 w-12" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="button-cta pt">
            Liên hệ trở thành đối tác
            <ChevronRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
