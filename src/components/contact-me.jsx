import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex flex-wrap overflow-hidden">

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 overflow-hidden px-5 py-10">
          <h1 className="text-5xl mb-10">CONTACT ME</h1>
          <form className="space-y-6">
            <div>
              <label className="text-gray-700">Name (required)</label>
              <div className="flex space-x-2 mt-1">
                <input type="text" name="firstName" placeholder="First Name" className="border-2 border-gray-200 p-2 flex-1" required />
                <input type="text" name="lastName" placeholder="Last Name" className="border-2 border-gray-200 p-2 flex-1" required />
              </div>
            </div>
            <div>
              <label className="text-gray-700">Email (required)</label>
              <input type="email" name="email" placeholder="Your email" className="border-2 border-gray-200 p-2 w-full" required />
            </div>
            <div>
              <label className="text-gray-700">Message (required)</label>
              <textarea name="message" rows="4" placeholder="Your message" className="border-2 border-gray-200 p-2 w-full" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white py-2 px-4">Send</button>
          </form>
        </div>
  
        {/* Image Section */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <img className="w-full h-full object-left object-cover" src="/maddy.png" alt="Contact" />
        </div>
  
      </div>
    );
};

export default ContactForm;