import { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

const SingleFaq = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 border rounded-md shadow-1 dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-dark rounded-md dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-gray-700 dark:focus:ring-opacity-50"
      >
        {question}
        <svg
          className={`w-6 h-6 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-gray-700 dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default SingleFaq;