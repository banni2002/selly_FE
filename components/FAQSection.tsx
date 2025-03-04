"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "Selly có giống Shopee hay sàn TMĐT khác không?",
    answer:
      "Các sàn thương mại điện tử Shopee, Lazada hay Tiki vì Shopee, Lazada, Tiki là nơi bạn mở shop đăng bán các sản phẩm của mình lên sàn hoặc là nơi mà người tiêu dùng mua sắm. Selly là nền tảng công nghệ cung cấp nguồn hàng chất lượng với giá tốt nhất từ nhà sản xuất đến với người có nhu cầu kinh doanh online mà không cần bỏ vốn. Vì vậy Selly không giống với các sàn thương mại Shopee, Lazada hay Tiki. Với Selly, bạn có thể bắt đầu bán hàng online mà không cần vốn, bạn chỉ cần vào Selly tìm sản phẩm muốn bán sau đó lấy thông tin sản phẩm đăng bán trên mạng xã hội như Facebook, Zalo, Instagram... hoặc gửi cho khách hàng tiềm năng của bạn. Sau khi đã có khách hàng muốn mua sản phẩm, bạn tạo đơn trên ứng dụng, Selly sẽ giúp bạn giao tận tay khách hàng."
  },
  {
    question: "Selly có phiên bản website không?",
    answer:
      "Hiện tại Selly chỉ có ứng dụng di động trên iOS và Android để mang lại trải nghiệm tốt nhất cho người dùng.",
  },
  {
    question: "Hàng trên Selly có phải chính hãng không?",
    answer:
      "Tất cả sản phẩm trên Selly đều là hàng chính hãng, có nguồn gốc xuất xứ rõ ràng và được kiểm duyệt chất lượng kỹ càng.",
  },
  {
    question: "Khách có được xem hàng và đồng kiểm với bưu tá khi hàng giao tới họ không?",
    answer:
      "Có, khách hàng được quyền kiểm tra hàng hóa khi nhận hàng. Tuy nhiên cần tuân thủ quy định về kiểm tra hàng của đơn vị vận chuyển.",
  },
  {
    question: "Nếu hàng giao tới khách mà khách không muốn nhận hàng thì tôi có phải chịu phí gì không?",
    answer:
      "Trong trường hợp khách không nhận hàng, bạn sẽ phải chịu phí ship 2 chiều. Tuy nhiên Selly có chính sách hỗ trợ một phần chi phí vận chuyển trong một số trường hợp.",
  },
];

export default function FAQSection() {
  // 👀 Dùng ref để kiểm tra khi nào phần tử vào màn hình
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 faq mx-auto">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          CÁC CÂU HỎI THƯỜNG GẶP
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <AccordionItem value={`item-${index}`} className="px-4 py-2">
                <AccordionTrigger className="text-[#384059]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
