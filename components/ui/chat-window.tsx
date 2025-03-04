"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { 
  Message, 
  SuggestedQuestion, 
  initialMessages, 
  initialSuggestedQuestions,
  chatbotConfig
} from "@/lib/data";
import { getBotResponse } from "@/lib/utils";

interface ChatWindowProps {
  onClose: () => void;
  initialQuestion?: string;
}

export default function ChatWindow({ onClose, initialQuestion }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [suggestedQuestions, setSuggestedQuestions] = useState<SuggestedQuestion[]>(initialSuggestedQuestions);
  const [input, setInput] = useState(initialQuestion || "");
  const [messageCount, setMessageCount] = useState(initialMessages.length);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (initialQuestion) {
      handleSend(initialQuestion);
    }
  }, []);

  const handleSend = (text: string) => {
    if (text.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messageCount + 1,
      text: text,
      isUser: true,
    };
    setMessages([...messages, userMessage]);
    setMessageCount(messageCount + 1);
    setInput("");
    const responseData = getBotResponse(text);

    setTimeout(() => {
      const botMessage: Message = {
        id: messageCount + 2,
        text: responseData.response,
        isUser: false,
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setMessageCount(messageCount + 2);
      
      // Update suggested questions
      setSuggestedQuestions(responseData.suggestedFollowUps);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const handleQuestionClick = (text: string) => {
    handleSend(text);
  };

  const removeQuestion = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSuggestedQuestions(suggestedQuestions.filter(q => q.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col w-[350px] h-[500px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#0365FA] text-white p-4 flex justify-between items-center">
        <h3 className="font-bold text-lg">{chatbotConfig.title}</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                ? "bg-[#50A4FD] text-right"
                  : "bg-[#BEE4F1]"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {suggestedQuestions.length > 0 && (
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex flex-col gap-2">
            {suggestedQuestions.map((question) => (
              <div 
                key={question.id}
                className="bg-[#cfebf5] rounded-lg p-2 pr-8 cursor-pointer hover:bg-[#BEE4F1] transition-colors relative"
                onClick={() => handleQuestionClick(question.text)}
              >
                {question.text}
                <button 
                  className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 p-1"
                  onClick={(e) => removeQuestion(question.id, e)}
                  aria-label="Remove question"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleFormSubmit} className="border-t p-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={chatbotConfig.inputPlaceholder}
          className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#50A4FD]"
        />
        <button
          type="submit"
          className="bg-[#50A4FD] hover:bg-[#0365FA] text-white p-2 rounded-r-lg"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </form>
      <div className="text-xs text-center text-gray-500 pb-2">
        {chatbotConfig.disclaimer}
      </div>
    </div>
  );
}