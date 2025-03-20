"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "If I lease an apartment for a period of 17 years, what happens to the apartment after the 17 years?",
    answer:
      "After 17 years, the lease expires, and the property ownership rights revert as per the agreement...",
  },
  {
    question: "Is there any other payment(s) to be made aside the lease price?",
    answer:
      "Yes, there might be additional charges such as maintenance, service fees, or legal costs.",
  },
  {
    question: "Do you have any payment plan/Installment payments?",
    answer:
      "Yes, we offer flexible installment plans over 6-12 months depending on the property.",
  },
  {
    question: "What title/bond covers my interest?",
    answer:
      "Your interest is covered by a registered lease agreement, backed by local property laws.",
  },
  {
    question: "Where are the properties located?",
    answer: "Our properties are located in prime areas across the country.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 px-6 bg-white' id="faq">
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>
          Frequently Asked Questions
        </h2>
        <p className='text-center text-gray-600 mt-4 w-[70%] mx-auto'>
          Need help? Check out the answers to your questions about One Million
          Landlord, or send an email to
          <a href='#' className='text-[#1D4ED8]'>
            info@onemillionlandlord.ng
          </a>
        </p>
        <div className='mt-8 space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b-2 pb-2'>
              {/* Question Button */}
              <button
                className='w-full text-left p-3 font-semibold flex justify-between items-center text-black focus:outline-none'
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span
                  className='text-xl text-[#1D4ED8]'
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key='content'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className='p-4 pt-0 text-gray-600'>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
