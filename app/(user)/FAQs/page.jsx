import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver groceries between 8 AM to 10 PM, 7 days a week.",
    },
    {
      question: "Is there a minimum order value for delivery?",
      answer: "Yes, the minimum order value for free delivery is ₹500.",
    },
    {
      question: "Can I schedule a delivery for later?",
      answer: "Absolutely! You can choose your preferred delivery slot during checkout.",
    },
    {
      question: "What if an item is out of stock?",
      answer: "We’ll notify you and either suggest alternatives or refund the amount.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach us via the 'Contact Us' page or call our support line: 1800-123-4567.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
