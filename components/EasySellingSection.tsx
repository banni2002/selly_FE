import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from "@/hooks/useInView";

interface FeatureCardProps {
  title: string;
  description: { text: string; highlighted: boolean }[] | string;
  imgSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imgSrc}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Desktop view (default) - Image on top, text below */}
      <div className="md:block hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={290}
          height={378}
          className="w-full"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-gray-800 uppercase mb-2">{title}</h3>
          {Array.isArray(description) ? (
            description.map((line, index) => (
              <p key={index} className="text-sm">
                {line.highlighted ? (
                  <span className="text-pink-600 font-medium">{line.text}</span>
                ) : (
                  <span className="text-gray-600">{line.text}</span>
                )}
              </p>
            ))
          ) : (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      </div>

      {/* Mobile and Tablet view - Image on left (smaller), text on right (expanded) */}
      <div className="md:hidden flex flex-row">
        <div className="w-1/3">
          <Image
            src={imgSrc}
            alt={title}
            width={290}
            height={378}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800 uppercase mb-2">{title}</h3>
          {Array.isArray(description) ? (
            description.map((line, index) => (
              <p key={index} className="text-sm">
                {line.highlighted ? (
                  <span className="text-pink-600 font-medium">{line.text}</span>
                ) : (
                  <span className="text-gray-600">{line.text}</span>
                )}
              </p>
            ))
          ) : (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const EasySellingSection = () => {
  const features = [
    {
      id: 1,
      title: "GIÁ TẬN XƯỞNG",
      description: [
        { text: "Hơn 83100 sản phẩm với mức", highlighted: false },
        { text: "hoa hồng lên đến 60%", highlighted: true }
      ],
      imgSrc: "/images/benefit-1.jpg",
    },
    {
      id: 2,
      title: "BÁN HÀNG VỚI 3 KHÔNG",
      description: [
        { text: "KHÔNG cần bỏ vốn", highlighted: true },
        { text: "KHÔNG phải lưu kho", highlighted: true },
        { text: "KHÔNG lo vận hành", highlighted: true }
      ],
      imgSrc: "/images/benefit-2.jpg",
    },
    {
      id: 3,
      title: "MIỄN PHÍ VẬN CHUYỂN",
      description: [
        { text: "Áp dụng với đơn từ", highlighted: false },
        { text: "149.000đ", highlighted: true }
      ],
      imgSrc: "/images/benefit-3.jpg",
    }
  ];
  
  const statsRefs = [useRef(null), useRef(null), useRef(null)];
  const statsVisible = statsRefs.map((ref) => useInView(ref));
  
  return (
    <section className="py-16 px-4 overflow-hidden mx-auto easy-selling">
      <div className={`max-w-6xl mx-auto text-center mb-12 transition-all duration-1000 ease-in-out ${
        statsVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `0ms` }}>
      <h2 className='mb-4'>BÁN HÀNG DỄ DÀNG CÙNG SELLY</h2>
      <p className="text-lg">
        Selly là nền tảng cung cấp nguồn hàng từ nhà sản xuất đến với người có nhu cầu 
        bán hàng mà không cần bỏ vốn.
      </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <div
        key={index}
        ref={statsRefs[index]}
        className={`transition-all duration-1000 ease-in-out ${
          statsVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
        >
        <div className="h-full flex justify-center">
          <FeatureCard key={feature.id} {...feature} />
        </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default EasySellingSection;