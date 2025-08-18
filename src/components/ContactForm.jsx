import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { GiPhone } from 'react-icons/gi';
import { FaMapLocationDot } from 'react-icons/fa6';
import ToastMessage from './ToastMessage';

const ContactForm = () => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: 'Sending your message...' });

    setTimeout(() => {
      setToast({ show: true, message: 'Your message has been sent!' });
      // Hide after 3 seconds
    }, 3000); // Change message after 3 seconds

    // Here you would typically handle the actual form submission, e.g., send data to a server
    // For this example, we're just simulating the delay.
  };

  return (
    <div className="cont ">
      <div className=" mt-25 mb-25 gap-20 flex md:flex-row flex-col ">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="Heading font-bold mb-5">
            Need additional information?
          </h1>
          <p className="text-[#8f8e8b] md:w-120 mb-10">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>

          <div className="shadowPrim bg-surface border border-[#b0ada958] p-5 md:w-fit flex flex-col gap-5 rounded-[16px]">
            <div
              className=" gap-3  flex items-center icon
                     md:w-120 py-3 px-5  border border-[#b0ada958]
                      rounded-[16px]"
            >
              <div className="text-2xl shadowPrim bg-surface p-3 rounded-[50%]">
                <MdEmail />
              </div>
              <div className="text-start">
                <h1>Email</h1>
                <a className="secondary-text">carrental@mail.com</a>
              </div>
            </div>

            <div
              className=" gap-3  flex items-center icon
                     md:w-120 py-3 px-5  border border-[#b0ada958]
                      rounded-[16px]"
            >
              <div className="text-2xl shadowPrim bg-surface p-3 rounded-[50%]">
                <GiPhone />
              </div>
              <div className="text-start">
                <h1>Phone</h1>
                <a className="secondary-text">+1 (555) 444-3333</a>
              </div>
            </div>

            <div
              className=" gap-3  flex items-center icon
                     md:w-120 py-3 px-5  border border-[#b0ada958]
                      rounded-[16px]"
            >
              <div className="text-2xl shadowPrim bg-surface p-3 rounded-[50%]">
                <FaMapLocationDot />
              </div>
              <div className="text-start">
                <h1>Address</h1>
                <a className="secondary-text">Cairo, Egypt</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border border-[#b0ada958] Normal row-span-2 flex flex-col
         rounded-[16px] bg-surface shadowPrim p-10 md:w-140"
        >
          <div className="mb-10">
            <h1 className="font-semibold">Get in Touch</h1>
            <h1 className="font-bold Heading2 pb-3">Contact with Us</h1>
            <p className="Paragraph md:w-120 text-[#8f8e8b]">
              Have any questions or feedback? We're here to help. Send us a
              message, We'll get back to you within 24 hours.
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-full Paragraph"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="Fname">First Name</label>
                <input
                  className="input-surface"
                  type="text"
                  id="Fname"
                  placeholder="First Name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="Lname">Last Name</label>
                <input
                  className="input-surface"
                  type="text"
                  id="Lname"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <input
                className="input-surface"
                type="email"
                id="Email"
                placeholder="yourname@mail.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="PHnumber">Phone number</label>
              <input
                className="input-surface"
                type="text"
                id="PHnumber"
                placeholder="+1 (555) 444-0000"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Message">Message</label>

              <textarea
                className="input-surface max-h-30 min-h-10"
                placeholder="Type your message"
                id="Message"
              ></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastMessage
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: '' })}
      />
    </div>
  );
};

export default ContactForm;
