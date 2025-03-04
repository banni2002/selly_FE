import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { botResponses } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getBotResponse(userInput: string) {
  const input = userInput.toLowerCase();
  
  if (input.includes("ally ai là gì") || input.includes("ally ai la gi")) {
    return botResponses.ally_ai_intro;
  } else if (input.includes("giúp") || input.includes("doanh nghiệp") || 
             input.includes("giup") || input.includes("doanh nghiep")) {
    return botResponses.business_help;
  } else if (input.includes("tính năng") || input.includes("tinh nang") || 
             input.includes("feature")) {
    return botResponses.features;
  } else if (input.includes("chi phí") || input.includes("giá") || 
             input.includes("chi phi") || input.includes("gia") || 
             input.includes("price") || input.includes("cost")) {
    return botResponses.pricing;
  } else {
    return botResponses.default;
  }
}