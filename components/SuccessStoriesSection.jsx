"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const getYoutubeEmbedUrl = (youtubeUrl) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = youtubeUrl.match(regExp);
  const videoId = (match && match[7].length === 11) ? match[7] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return youtubeUrl;
};

const VideoCard = ({ title, person, occupation, youtubeUrl }) => {
  const cardRef = useRef(null);
  const isVisible = useInView(cardRef);

  const embedUrl = getYoutubeEmbedUrl(youtubeUrl);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
    >
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600 font-medium">{person}</p>
        <p className="text-gray-500">{occupation}</p>
      </div>
    </div>
  );
};

// Nút điều hướng
const SlideButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 
        ${direction === 'prev' ? 'left-0 -ml-4' : 'right-0 -mr-4'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-100'}`}
    >
      {direction === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

// Indicator cho slide
const SlideIndicators = ({ count, activeIndex, onClick }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`h-3 w-3 mx-1 rounded-full transition-all 
            ${activeIndex === index ? 'bg-pink-500 w-6' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

const SuccessStoriesSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isSectionVisible = useInView(sectionRef);
  
  // State cho mobile slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Kiểm tra kích thước màn hình để xác định có phải mobile/tablet hay không
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Dưới lg breakpoint
    };
    
    // Kiểm tra lần đầu
    checkIsMobile();
    
    // Thêm event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      title: "Tôi đã kiếm tiền trong mùa dịch như thế nào?",
      person: "Phương Thanh",
      occupation: "Văn phòng",
      youtubeUrl: "https://www.youtube.com/watch?v=7xtFGBUw7Dc"
    },
    {
      id: 2,
      title: "Vừa làm mẹ, vừa kinh doanh tại nhà",
      person: "Lê Thị Trường",
      occupation: "Nội trợ",
      youtubeUrl: "https://www.youtube.com/watch?v=YsqM7a_2Qr4"
    },
    {
      id: 3,
      title: "Kinh doanh không phân biệt tuổi tác",
      person: "Cô Phương Ngọc",
      occupation: "Diễn viên",
      youtubeUrl: "https://www.youtube.com/watch?v=RfKfCGE-k4U"
    }
  ];

  // Xử lý chuyển slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? prev : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 success-story mx-auto transition-all duration-1000 ease-in-out"
    >
      <div className={`max-w-6xl mx-auto text-center mb-12 transition-all duration-1000
        ${isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="mb-4">NGƯỜI THẬT, KIẾM TIỀN THẬT!</h2>
        <p className="text-xl text-gray-600">
          Hàng ngàn người đã và đang kiếm tiền mỗi ngày cùng với Selly, còn bạn thì sao?
        </p>
      </div>
      
      {/* Desktop view - Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(testimonial => (
          <VideoCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      
      {/* Mobile/Tablet view - Slider */}
      <div className="lg:hidden relative max-w-lg mx-auto">
        <div 
          ref={sliderRef} 
          className="overflow-hidden"
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                <VideoCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide navigation buttons */}
        <SlideButton 
          direction="prev" 
          onClick={goToPrevSlide} 
          disabled={currentSlide === 0} 
        />
        <SlideButton 
          direction="next" 
          onClick={goToNextSlide} 
          disabled={currentSlide === testimonials.length - 1} 
        />
        
        {/* Slide indicators */}
        <SlideIndicators 
          count={testimonials.length} 
          activeIndex={currentSlide} 
          onClick={goToSlide} 
        />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;