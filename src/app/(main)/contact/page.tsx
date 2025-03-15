"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { z } from "zod";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const formSchema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    reset();
  };
  return (
    <div className='bg-white min-h-screen text-black relative pb-[300px]'>
      <div className='bg-[#E9EDFB] h-[300px] flex flex-col justify-center'>
        {" "}
        <div className='max-w-4xl mx-auto text-center text-black'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
            We&apos;d love to hear from you. Get in touch
          </h2>
          <p className='mt-4 text-[#122231] text-sm md:text-base'>
            A member of the team will reach out to you as oon as possible
          </p>
        </div>
      </div>
      <div className='z-0 absolute top-[200px] left-1/2 transform -translate-x-1/2 w-full max-w-lg mx-auto p-6  flex flex-col gap-4'>
        <div className='w-full p-6 bg-white rounded-md shadow-md flex flex-col gap-6'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {/* Full Name */}
            <div>
              <label className='block text-gray-600 text-sm font-medium'>
                Full Name
              </label>
              <input
                {...register("fullName")}
                type='text'
                placeholder='Enter your full name'
                className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.fullName && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className='block text-gray-600 text-sm font-medium'>
                Email Address
              </label>
              <input
                {...register("email")}
                type='email'
                placeholder='Enter email address'
                className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-medium'>
                Phone Number
              </label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry='NG'
                    placeholder='Enter phone number'
                    className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                  />
                )}
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className='block text-gray-600 text-sm font-medium'>
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder='How can we help you?'
                className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className='w-1/2 md:w-1/3 mx-auto'>
              {/* Submit Button */}
              <button
                type='submit'
                className='w-full mx-auto bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className=' flex flex-col md:flex-row justify-center gap-6 w-full'>
          <div className='flex flex-col items-center space-x-4 p-6 bg-white shadow-md rounded-md w-full md:w-1/2 gap-1'>
            <span className='bg-[#DBEAFE] p-1 rounded-md'>
              <CgMail className='text-[#1D4ED8]' size={32} />
            </span>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='font-semibold text-black'>Email Us</h3>
              <p className='text-gray-600 text-sm'>
                info@onemillionlandlord.com
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center space-x-4 p-6 bg-white shadow-md rounded-md w-full md:w-1/2 gap-1'>
            <span className='bg-[#DBEAFE] p-1 rounded-md'>
              <BiPhone className='text-[#1D4ED8]' size={32} />
            </span>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='font-semibold text-black'>Call Us</h3>
              <p className='text-gray-600 text-sm'>+234 8027 282 3949</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
