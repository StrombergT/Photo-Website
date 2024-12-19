"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqComponent = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "What photography services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      question: "How much do you charge? What are your rates?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      question: "Do you have a studio?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
  ]);

  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setIsOpen((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="space-y-2 border-t border-gray-300">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`border-b border-gray-300 ${
            isOpen === index ? "bg-gray-900" : ""
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer py-4 px-2 text-lg font-medium text-primary "
            onClick={() => toggleOpen(index)}
          >
            <span className="text-2xl">{item.question}</span>
            <span
              className={`text-5xl text-primary transform transition-transform duration-300 ease-in-out ${
                isOpen === index ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen === index ? "-" : "+"}
            </span>
          </div>
          {isOpen === index && (
            <div className="px-4 pb-4 text-secondary leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
