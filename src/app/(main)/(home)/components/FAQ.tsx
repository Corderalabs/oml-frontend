"use client";
import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Toggle the open state
  };

  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>
          Frequently Asked Questions
        </h2>
        <p className='text-center text-gray-600 mt-4 w-[70%] mx-auto'>
          Need help? Check out the answers to your questions about One Million
          Landlord, or send an email to{" "}
          <a href='#' className='text-[#1D4ED8]'>
            info@onemillionlandlord.ng
          </a>
        </p>
        <div className='mt-8 space-y-4'>
          {faqs.map((faq, index) => (
            <>
              <div key={index} className=''>
                <button
                  className='w-full text-left p-2 font-semibold flex justify-between items-center text-black'
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className='text-xl text-[#1D4ED8]'>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && <hr className='border-b my-2' />}

                {openIndex === index && (
                  <p className='p-4 pt-0 text-gray-600'>{faq.answer}</p>
                )}
              </div>
              <hr className='border-b-2' />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
