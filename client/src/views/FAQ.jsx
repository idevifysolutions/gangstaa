// src/FAQ.js
import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused items in their original packaging. Simply contact our support team to initiate the return process. We also offer exchanges if you wish to replace the item.",
    description:
      "If you are not satisfied with your purchase, you can return or exchange it within 30 days. We process refunds quickly, but it may take a few days for the amount to be reflected in your bank account.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping rates and times vary depending on your location. Please note that additional customs fees may apply.",
    description:
      "Our international shipping partners ensure fast and secure deliveries. Depending on your location, delivery times may range from 5 to 20 business days. Track your shipment easily with our real-time tracking system.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a confirmation email with a tracking number that you can use to track your package.",
    description:
      "You can also visit the 'My Orders' section on our website to view real-time updates on your order’s status. We partner with reliable couriers to provide accurate tracking information.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and Apple Pay. For international orders, local payment methods may also be available depending on your country.",
    description:
      "We ensure secure transactions through industry-standard encryption. Additionally, we offer installment plans and deferred payment options through selected payment gateways.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 24 hours of purchase by contacting our customer service. Once your order is processed, we may not be able to make changes.",
    description:
      "To avoid any issues, please review your order details before finalizing. If you have any concerns or special requests, our customer service team is available to assist you.",
  },
  {
    question: "What sizes do you offer?",
    answer:
      "We offer a wide range of sizes, from XS to 3XL, in most of our clothing items. Refer to the size chart on each product page for more details.",
    description:
      "Our size charts provide detailed measurements to help you select the perfect fit. We recommend reviewing the chart before placing your order, as sizing may vary across brands.",
  },
  {
    question: "How do I care for my clothing?",
    answer:
      "Each item comes with specific care instructions on the label. We recommend following these instructions to maintain the quality and longevity of your purchase.",
    description:
      "Most of our items are machine-washable, but delicate fabrics may require hand washing or dry cleaning. Avoid harsh detergents and high heat settings to prevent damage.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10 uppercase tracking-wider">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold focus:outline-none "
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-4xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`mt-4 text-gray-900  ${
                  openIndex === index ? "max-h-full" : "max-h-0 overflow-hidden"
                }`}
              >
                {openIndex === index && (
                  <>
                    <p className="text-lg mb-2">{faq.answer}</p>
                    <p className="text-sm text-gray-700">{faq.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
