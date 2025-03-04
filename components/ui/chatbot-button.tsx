"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./chat-window";
import { SuggestedQuestion, mainScreenQuestions } from "@/lib/data";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedQuestions, setDisplayedQuestions] = useState<SuggestedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Display a new question every 3 seconds, up to 3 questions
    const interval = setInterval(() => {
      if (currentIndex < mainScreenQuestions.length && displayedQuestions.length < 3) {
        setDisplayedQuestions(prev => [...prev, mainScreenQuestions[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, displayedQuestions.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const removeQuestion = (id: number) => {
    setDisplayedQuestions(displayedQuestions.filter(q => q.id !== id));
  };

  const handleQuestionClick = (question: SuggestedQuestion) => {
    setIsOpen(true);
    removeQuestion(question.id);
  };

  return (
    <>
      {/* Floating questions */}
      <div className="fixed right-6 bottom-28 flex flex-col gap-3 items-end max-w-xs">
        {displayedQuestions.map((question) => (
          <div 
            key={question.id}
            className="bg-[#cfebf5] rounded-lg p-3 pr-10 shadow-md cursor-pointer hover:bg-[#BEE4F1] transition-colors relative animate-fadeIn"
            onClick={() => handleQuestionClick(question)}
          >
            <p className="text-gray-800">{question.text}</p>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-1"
              onClick={(e) => {
                e.stopPropagation();
                removeQuestion(question.id);
              }}
              aria-label="Remove question"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Chat button */}
      <div className="fixed right-6 bottom-6">
        <button
          onClick={toggleChat}
          className="bg-[#50A4FD] hover:bg-[#0365FA] text-white rounded-full p-4 shadow-lg transition-colors"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Chat window */}
      {isOpen && <div className="fixed right-6 bottom-20 z-50">
        <ChatWindow onClose={() => setIsOpen(false)} />
      </div>}
    </>
  );
}