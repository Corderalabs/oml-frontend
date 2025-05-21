"use client";
import React from "react";
import { Controller } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage"; // your error message component
import useSubmit from "../apply/hooks/useSubmit";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// courseAreas.ts
export interface CourseArea {
  id: "investment" | "management" | "law" | "marketing";
  label: string;
}

const courseAreas: CourseArea[] = [
  { id: "investment", label: "Property Investment Strategies" },
  { id: "management", label: "Property Management Essentials" },
  { id: "law", label: "Real Estate Law" },
  { id: "marketing", label: "Real Estate Marketing & Sales" },
];

// export default function JoinAcademy({
//   joinSectionRef,
// }: {
//   joinSectionRef: React.RefObject<HTMLDivElement | null>;
// }) {
export default function JoinAcademy() {
  const { onSubmit, form, success, loading, errors } = useSubmit();

  return (
    // <section
    //   ref={joinSectionRef as React.RefObject<HTMLElement>}
    //   className='bg-[#EFF6FF] py-8 md:py-16'
    // >
    <section className='bg-white py-8 md:py-16'>
      {/* Container */}
      <div className='max-w-5xl mx-auto px-4 md:px-8'>
        {/* Header */}
        <div className='text-center mb-5 md:mb-8 max-w-md mx-auto'>
          <h2 className='text-2xl md:text-3xl font-semibold text-[#000929]'>
            One Million Landlord Academy
          </h2>
          <p className='text-sm md:text-lg text-[#000929]/60'>
            Get hands-on training, and mentorship—perfect for beginners and pros
            alike!
          </p>
        </div>

        {/* Form Card */}
        <div className='border rounded-lg max-w-2xl mx-auto p-5 '>
          {/* Form Title */}
          <div className='text-center'>
            <h3 className='text-base md:text-lg font-bold text-[#000929]'>
              Join a Profound Network of Real Estate Gurus Today!
            </h3>
          </div>
          <hr className='mt-2 mb-4 ' />
          <form className='space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {/* Full Name */}
              <div>
                <label className='block text-sm font-medium text-black mb-1'>
                  Full Name
                </label>
                <Controller
                  control={form.control}
                  name='fullName'
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        value={value}
                        onChange={onChange}
                        type='text'
                        placeholder='Enter your full name'
                        className='w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:border-blue-500'
                      />
                      <ErrorMessage message={errors.fullName?.message || ""} />
                    </>
                  )}
                />
              </div>

              {/* Business Phone */}
              <div>
                <label className='block text-sm font-medium text-black mb-1'>
                  Business Phone
                </label>
                <Controller
                  control={form.control}
                  name='phone'
                  render={({ field: { onChange, value } }) => (
                    <>
                      <PhoneInput
                        international
                        defaultCountry='NG'
                        value={value}
                        placeholder='e.g. +234 806 742 7272'
                        onChange={onChange}
                        className='w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:border-blue-500'
                      />
                      <ErrorMessage message={errors.phone?.message || ""} />
                    </>
                  )}
                />
              </div>
            </div>
            {/* Email Address */}
            <div>
              <label className='block text-sm font-medium text-black mb-1'>
                Email Address
              </label>
              <Controller
                control={form.control}
                name='email'
                render={({ field: { onChange, value } }) => (
                  <>
                    <input
                      value={value}
                      onChange={onChange}
                      type='email'
                      placeholder='e.g. abc@gmail.com'
                      className='w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:border-blue-500'
                    />
                    <ErrorMessage message={errors.email?.message || ""} />
                  </>
                )}
              />
            </div>

            {/* More Information */}
            <div>
              <label className='block text-sm font-medium text-black mb-1'>
                More Information{" "}
                <span className='text-black/55'>(Optional)</span>
              </label>
              <Controller
                control={form.control}
                name='moreInformation'
                render={({ field: { onChange, value } }) => (
                  <>
                    <textarea
                      value={value}
                      onChange={onChange}
                      rows={5}
                      placeholder='Let us know how else we can provide value to you'
                      className='w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:border-blue-500'
                    />
                    <ErrorMessage
                      message={errors.moreInformation?.message || ""}
                    />
                  </>
                )}
              />
            </div>

            {/* Areas of Focus */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                What areas would you like us to focus on?
              </label>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {courseAreas.map((area: CourseArea) => (
                  <div key={area.id} className='flex items-center'>
                    <Controller
                      control={form.control}
                      name={
                        area.id as
                          | "investment"
                          | "management"
                          | "law"
                          | "marketing"
                      }
                      render={({ field: { onChange, value } }) => (
                        <input
                          type='checkbox'
                          checked={!!value}
                          onChange={(e) => onChange(e.target.checked)}
                          className='mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded accent-blue-600'
                        />
                      )}
                    />
                    <label className='text-sm text-gray-700'>
                      {area.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        {/* Submit Button */}
        <div className='flex justify-end mt-5 max-w-2xl mx-auto'>
          <button
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading}
            type='submit'
            className='bg-blue-600 text-white font-semibold py-1 px-10 rounded-md hover:bg-blue-700 transition'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
}
