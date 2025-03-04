// Fake data for chatbot
// This can be replaced with API calls to your backend later

export interface Message {
    id: number;
    text: string;
    isUser: boolean;
  }
  
  export interface SuggestedQuestion {
    id: number;
    text: string;
  }
  
  export interface ChatbotConfig {
    title: string;
    welcomeMessage: string;
    inputPlaceholder: string;
    disclaimer: string;
  }
  
  // Initial messages shown when chat opens
  export const initialMessages: Message[] = [
    {
      id: 1,
      text: "Xin chào 👋 Sẵn sàng khám phá ALLY AI chưa?",
      isUser: false,
    },
  ];
  
  // Questions that appear on the main screen
  export const mainScreenQuestions: SuggestedQuestion[] = [
    { id: 1, text: "Hãy hỏi tôi bất cứ điều gì để bắt đầu tạo chatbot AI như thế này cho trang web của bạn!" },
    { id: 2, text: "ALLY AI là gì?" },
    { id: 3, text: "ALLY AI có thể giúp doanh nghiệp của tôi như thế nào?" },
    { id: 4, text: "Tính năng chính của ALLY AI là gì?" },
    { id: 5, text: "Chi phí sử dụng ALLY AI là bao nhiêu?" }
  ];
  
  // Questions shown inside the chat window
  export const initialSuggestedQuestions: SuggestedQuestion[] = [
    {
      id: 1,
      text: "Hãy hỏi tôi bất cứ điều gì để bắt đầu tạo chatbot AI như thế này cho trang web của bạn!"
    },
    {
      id: 2,
      text: "ALLY AI là gì?"
    },
    {
      id: 3,
      text: "ALLY AI có thể giúp doanh nghiệp của tôi như thế nào?"
    }
  ];
  
  // Responses based on user questions
  export const botResponses: Record<string, {
    response: string,
    suggestedFollowUps: SuggestedQuestion[]
  }> = {
    "ally_ai_intro": {
      response: "ALLY AI là trợ lý bán hàng AI thông minh 24/7, giúp tự động hóa quy trình bán hàng và chăm sóc khách hàng với trí tuệ nhân tạo tiên tiến.",
      suggestedFollowUps: [
        {
          id: 4,
          text: "Tính năng chính của ALLY AI là gì?"
        },
        {
          id: 5,
          text: "Chi phí sử dụng ALLY AI là bao nhiêu?"
        }
      ]
    },
    "business_help": {
      response: "ALLY AI có thể giúp doanh nghiệp của bạn tự động hóa quy trình bán hàng, chăm sóc khách hàng 24/7, tích hợp đa kênh và tăng trưởng doanh số.",
      suggestedFollowUps: [
        {
          id: 6,
          text: "Làm thế nào để tích hợp ALLY AI vào website của tôi?"
        },
        {
          id: 7,
          text: "ALLY AI có hỗ trợ nhiều ngôn ngữ không?"
        }
      ]
    },
    "features": {
      response: "Các tính năng chính của ALLY AI bao gồm: trả lời tự động 24/7, tích hợp đa nền tảng, phân tích dữ liệu khách hàng, tạo lead và chuyển đổi khách hàng tiềm năng.",
      suggestedFollowUps: [
        {
          id: 8,
          text: "ALLY AI có thể tích hợp với CRM không?"
        },
        {
          id: 9,
          text: "Có thể tùy chỉnh câu trả lời của ALLY AI không?"
        }
      ]
    },
    "pricing": {
      response: "ALLY AI có nhiều gói dịch vụ phù hợp với quy mô doanh nghiệp của bạn, bắt đầu từ gói miễn phí cho đến gói doanh nghiệp. Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết.",
      suggestedFollowUps: [
        {
          id: 10,
          text: "Tôi có thể dùng thử ALLY AI không?"
        },
        {
          id: 11,
          text: "Làm thế nào để đăng ký sử dụng ALLY AI?"
        }
      ]
    },
    "default": {
      response: "Xin lỗi, có lỗi xảy ra! Vui lòng thử lại hoặc chọn một câu hỏi khác.",
      suggestedFollowUps: [
        {
          id: 12,
          text: "ALLY AI là gì?"
        },
        {
          id: 13,
          text: "Các tính năng chính của ALLY AI?"
        },
        {
          id: 14,
          text: "Chi phí sử dụng ALLY AI?"
        }
      ]
    }
  };
  
  // Chatbot configuration
  export const chatbotConfig: ChatbotConfig = {
    title: "TripC",
    welcomeMessage: "Xin chào 👋 Sẵn sàng khám phá TripC chưa?",
    inputPlaceholder: "Nhập tin nhắn...",
    disclaimer: "Lưu ý: AI có thể không chính xác. Vui lòng xác minh thông tin quan trọng."
  };