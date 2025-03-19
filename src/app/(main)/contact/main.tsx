"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useSubmit from "./hooks/useSubmit";

export default function Main() {
  const { onSubmit, form, success, loading } = useSubmit();

  return (
    <div className='h-full text-black'>
      <div className='bg-[#EFF6FF] h-[390px] flex justify-center w-full'>
        <div className='flex flex-col gap-7 text-center pt-20 w-11/12 mx-auto md:w-full'>
          <p className='font-bold text-3xl md:text-4xl'>
            We&apos;d love to hear from you. Get in touch
          </p>
          <p className='text-lg font-medium'>
            A member of the team will reach out to you as oon as possible
          </p>
        </div>
      </div>

      <div className='relative'>
        <div className='w-full absolute -top-28 md:-top-32'>
          <div className='w-11/12 md:w-6/12 mx-auto bg-white shadow-md rounded-xl'>
            <form onSubmit={form.handleSubmit(onSubmit)} className='p-10'>
              <div className='grid gap-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Full Name</p>
                  <Controller
                    control={form.control}
                    name='fullName'
                    render={({ field: { onChange, onBlur, value } }) => (
                      <div className='relative'>
                        <input
                          value={value}
                          className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                          type='text'
                          placeholder='Enter your full name'
                          onChange={onChange}
                        />
                        {/* {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>} */}
                      </div>
                    )}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Email Address</p>
                  <Controller
                    control={form.control}
                    name='email'
                    render={({ field: { onChange, onBlur, value } }) => (
                      <div className='relative'>
                        <input
                          value={value}
                          className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                          type='email'
                          placeholder='Enter email address'
                          onChange={onChange}
                        />
                        {/* {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>} */}
                      </div>
                    )}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Phone Number</p>
                  <Controller
                    control={form.control}
                    name='phoneNumber'
                    render={({ field: { onChange, onBlur, value } }) => (
                      <div className='relative'>
                        <PhoneInput
                          international
                          defaultCountry='NG' // You can change this to your preferred default country
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                        />
                      </div>
                    )}
                  />
                  {/* {errors.phoneNumber && (
                    <p className='text-red-500 text-sm'>
                      {errors.phoneNumber.message}
                    </p>
                  )} */}
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Message</p>
                  <Controller
                    control={form.control}
                    name='message'
                    render={({ field: { onChange, onBlur, value } }) => (
                      <div className='relative'>
                        <textarea
                          value={value}
                          className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                          placeholder='How can we help you?'
                          onChange={onChange}
                        />
                        {/* {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>} */}
                      </div>
                    )}
                  />
                </div>

                <div className='flex justify-center'>
                  <button className='bg-[#1D4ED8] rounded-xl py-3 px-6 text-white text-sm font-semibold'>
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='w-11/12 md:w-8/12 mx-auto mb-24 mt-[500px]'>
        <div className='grid md:grid-cols-3 gap-8 w-full'>
          <div className='bg-white shadow-md flex flex-col justify-center items-center gap-5 h-48 rounded-lg w-full'>
            <div className='bg-[#DBEAFE] h-12 w-12 flex justify-center items-center rounded-md'>
              <CgMail className='text-[#1D4ED8]' size={32} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='font-semibold text-black text-xl'>Email Us</h3>
              <p className='text-[#122231] text-lg font-normal'>
                info@onemillionlandlord.com
              </p>
            </div>
          </div>

          <div className='bg-white shadow-md flex flex-col justify-center items-center gap-5 h-48 rounded-lg w-full'>
            <div className='bg-[#DBEAFE] h-12 w-12 flex justify-center items-center rounded-md'>
              <BiPhone className='text-[#1D4ED8]' size={32} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='font-semibold text-black text-xl'>Call Us</h3>
              <p className='text-[#122231] text-lg font-normal'>
                +234 8027 282 3949
              </p>
            </div>
          </div>

          <div className='bg-white shadow-md flex flex-col justify-center items-center gap-5 h-48 rounded-lg w-full'>
            <div className='bg-[#DBEAFE] h-12 w-12 flex justify-center items-center rounded-md'>
              <FaWhatsapp className='text-[#1D4ED8]' size={32} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='font-semibold text-black text-xl'>
                Send us a message
              </h3>
              <p className='text-[#122231] text-lg font-normal'>
                +234 8027 282 3949
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-3 w-full'>
        <div className='flex flex-col items-center space-x-4 p-6 bg-white shadow-md rounded-md w-full  gap-1'>
          <span className='bg-[#DBEAFE] p-1 rounded-md'>
            <CgMail className='text-[#1D4ED8]' size={32} />
          </span>
          <div className='flex flex-col items-center gap-1'>
            <h3 className='font-semibold text-black'>Email Us</h3>
            <p className='text-gray-600 text-sm'>info@onemillionlandlord.com</p>
          </div>
        </div>

        <div className='flex flex-col items-center space-x-4 p-6 bg-white shadow-md rounded-md w-full  gap-1'>
          <span className='bg-[#DBEAFE] p-1 rounded-md'>
            <BiPhone className='text-[#1D4ED8]' size={32} />
          </span>
          <div className='flex flex-col items-center gap-1'>
            <h3 className='font-semibold text-black'>Call Us</h3>
            <p className='text-gray-600 text-sm'>+234 8027 282 3949</p>
          </div>
        </div>

        <div className='flex flex-col items-center space-x-4 p-6 bg-white shadow-md rounded-md w-full  gap-1'>
          <span className='bg-[#DBEAFE] p-1 rounded-md'>
            <FaWhatsapp className='text-[#1D4ED8]' size={32} />
          </span>
          <div className='flex flex-col items-center gap-1'>
            <h3 className='font-semibold text-black'>Send us a message</h3>
            <p className='text-gray-600 text-sm'>+234 8027 282 3949</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
