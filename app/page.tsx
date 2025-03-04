"use client";

import React from "react";
import Header from "@/components/Header";
import Introduce from "@/components/Introduce";
import Reward from "@/components/Reward";
import SuccessStories from "@/components/SuccessStoriesSection";
import IncomingMothly from "@/components/IncomingMothly";
import EasySellingSection from "@/components/EasySellingSection";
import CommerceModel from "@/components/CommerceModel";
import Partner from "@/components/Partner";
import SellySteps from "@/components/SellySteps";
import FAQSection from "@/components/FAQSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Policy from "@/components/Policy";
import ChatbotButton from "@/components/ui/chatbot-button";

export default function Home() {


  return (
    <div id="app">
      <Header />
      <div className="landing-page mx-auto w-full">
        <Introduce />
        {/* <Reward /> */}
        <SuccessStories />
        <IncomingMothly />
        <EasySellingSection />
        <CommerceModel />
        <Partner />
        <SellySteps />
        <FAQSection />
        <AboutUs />
        <ChatbotButton />
      </div>
      <Footer />
      <Policy />
    </div>
  );
}