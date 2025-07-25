'use client';

import React, { useState } from 'react';

// Data for the FAQ items
const faqData = [
    {
        question: 'How do I book a trip with your travel service?',
        answer: 'You can book a trip through our website, by calling our customer service hotline, or by visiting one of our offices. Simply choose your destination, travel dates, and preferred services, and our system will guide you through the process.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept a variety of payment methods, including all major credit cards (Visa, MasterCard, American Express), PayPal, and direct bank transfers. All transactions are secure and encrypted.'
    },
    {
        question: 'How do I know if my booking is confirmed?',
        answer: 'Once your booking is complete, you will receive a confirmation email with all the details of your trip, including your itinerary and booking references. You can also view your confirmed bookings in the "My Trips" section of your account on our website.'
    },
    {
        question: 'Do you offer group travel packages?',
        answer: 'Yes, we specialize in group travel! We offer customizable packages for families, corporate teams, and groups of friends. Please contact our group booking department for special rates and arrangements.'
    },
    {
        question: 'Do you offer travel insurance?',
        answer: 'While we do not sell travel insurance directly, we strongly recommend it. We have partnered with leading insurance providers to offer our customers exclusive rates. You can find links to their services on our booking page.'
    }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Reusable Accordion Item Component
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick })  => {
    return (
        <div onClick={onClick} className="w-full lg:w-[85%] ml-auto rounded-2xl border-gray-200 border-2 py-4 group">
            <button
                
                className="w-full flex justify-between items-center text-left text-xl lg:text-2xl font-medium text-gray-800 focus:outline-none"
            >
                <span className='p-2 pl-6'>{question}</span>
                
            </button>
            <div
                className={`overflow-hidden pl-6 transition-all duration-600 ease-in-out max-h-0 group-hover:max-h-96 ${isOpen ? '' : ''}`}
            >
                <p className="text-gray-600">
                    {answer}
                </p>
            </div>
        </div>
    );
};


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep the first item open by default

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or close if already open
  };
    return (
        <div className='mx-4 gap-20 lg:gap-0 lg:mx-20 flex flex-col lg:flex-row mb-30'>
            <div className="w-full lg:w-1/2">
                <div className='font-medium text-xl text-[#259ada] mb-5'>//FAQs</div>
                <h2 className='text-5xl md:text-6xl font-light mb-6'>Frequently Asked Questions</h2>
                <p className='text-gray-500 text-lg'>
                    We believe in the power of collective action to address the urgent environmental challenges facing our planet.
                </p>
            </div>
            <div className='w-full flex flex-col gap-5 lg:w-2/3'>
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQSection
