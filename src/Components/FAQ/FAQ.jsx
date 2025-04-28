import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is the Creator Dashboard?",
            answer: "The Creator Dashboard is a platform that allows creators to manage their profiles, earn credit points, and engage with curated content from multiple sources."
        },
        {
            question: "How do I earn credit points?",
            answer: "You can earn credit points by logging in daily, completing your profile, saving or sharing feed content, and interacting with posts."
        },
        {
            question: "Can I save or share content from the feed?",
            answer: "Yes! You can save your favorite content to your dashboard and share links directly with others."
        },
        {
            question: "What APIs are used for the content feed?",
            answer: "We aggregate posts using public APIs from Twitter, Reddit, and LinkedIn to bring you fresh and diverse content."
        },
        {
            question: "How do admins manage user credits?",
            answer: "Admins can view user analytics and manually update or adjust credit balances through the Admin Panel."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="container mx-auto px-3 mb-5">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <span className="text-indigo-600 text-2xl">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="mt-4 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
