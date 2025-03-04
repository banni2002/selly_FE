"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const PressCoverageSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState(4);
  const sectionRef = useRef<HTMLElement | null>(null);

  const mediaLogos = [
    {
      id: 1,
      name: 'Tech in Asia',
      logoSrc: '/images/sm_big-dan-tri-logo.png',
      alt: 'Tech in Asia Logo',
      link: 'https://www.techinasia.com'
    },
    {
      id: 2,
      name: 'Thông tin và Truyền thông',
      logoSrc: '/images/sm_tech-in-asia-logo.png',
      alt: 'Thông tin và Truyền thông Logo',
      link: 'https://thongtintruyenthong.vn'
    },
    {
      id: 3,
      name: 'Dân Trí',
      logoSrc: '/images/sm_the-business-time-logo.png',
      alt: 'Dân Trí Logo',
      link: 'https://dantri.com.vn'
    },
    {
      id: 4,
      name: 'The Business Times',
      logoSrc: '/images/sm_thong-tin-truyen-thong-logo.png',
      alt: 'The Business Times Logo',
      link: 'https://www.businesstimes.com.sg'
    },
    {
      id: 5,
      name: 'Tech in Asia',
      logoSrc: '/images/sm_big-dan-tri-logo.png',
      alt: 'Tech in Asia Logo',
      link: 'https://www.techinasia.com'
    }
  ];

  useEffect(() => {
    const updateVisibleLogos = () => {
      if (window.innerWidth < 768) {
        setVisibleLogos(1);
      } else if (window.innerWidth < 1024) {
        setVisibleLogos(2);
      } else {
        setVisibleLogos(4);
      }
    };

    updateVisibleLogos();
    window.addEventListener('resize', updateVisibleLogos);
    return () => window.removeEventListener('resize', updateVisibleLogos);
  }, []);

  const totalSlides = Math.ceil(mediaLogos.length / visibleLogos);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Kiểm tra ngay khi component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className={`mx-auto text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="mb-16">BÁO CHÍ NÓI VỀ CHÚNG TÔI</h2>
        
        {/* Funding announcement card */}
        <div className="bg-slate-800 text-white rounded-lg p-8 md:p-12 mb-16 mx-auto max-w-4xl">
          <h3 className="text-xl md:text-2xl font-medium mb-4 leading-relaxed">
            Selly gọi thành công 2,6 triệu USD trong vòng gọi vốn Pre-Series A từ 5 quỹ đầu tư
          </h3>
          <p className="text-gray-300 text-lg">
            CyberAgent Capital, Do Ventures, Genesia Ventures, JAFCO Asia, KVision
          </p>
        </div>
        
        {/* Logo slider with navigation */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {mediaLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="flex justify-center items-center"
                  style={{ width: `${100 / (totalSlides * visibleLogos)}%` }}
                >
                  <a 
                    href={logo.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-40 h-20 relative block mx-auto"
                  >
                    <Image
                      src={logo.logoSrc}
                      alt={logo.alt}
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full shadow-md p-2 z-10 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full shadow-md p-2 z-10 focus:outline-none"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressCoverageSection;