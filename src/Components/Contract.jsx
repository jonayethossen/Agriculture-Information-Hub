import React, { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting inquiries to agricultural experts
    console.log("Form Submitted:", formData);
    alert("Your inquiry has been sent to our agricultural experts!");
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section (Requirement 5.a) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00a86b] mb-4">
            Contact Agricultural Experts
          </h2>
          <div className="h-1 w-24 bg-[#00a86b] mx-auto mb-6"></div>
          <p className="text-gray-400">
            Submit your inquiries, seek advice, or request additional
            information from our verified agricultural extension services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Direct Contact Info (Requirement 5.c) */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-[#00a86b] font-bold uppercase tracking-wider text-sm mb-2">
                Direct Line
              </h3>
              <p className="text-gray-300">+880 1234-567890</p>
              <p className="text-xs text-gray-500">
                Available Sun-Thu, 9am - 5pm
              </p>
            </div>
            <div>
              <h3 className="text-[#00a86b] font-bold uppercase tracking-wider text-sm mb-2">
                Office Address
              </h3>
              <p className="text-gray-300">Agricultural Information Hub</p>
              <p className="text-gray-300">Farmgate, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-[#00a86b] font-bold uppercase tracking-wider text-sm mb-2">
                Email Support
              </h3>
              <p className="text-gray-300">expert@agrihub-bd.com</p>
            </div>
          </div>

          {/* Contact Form (Requirement 5.b) */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahim Ahmed"
                  className="bg-[#121212] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#00a86b] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="rahim@example.com"
                  className="bg-[#121212] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#00a86b] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-xs font-bold text-gray-500 uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Pest Infestation in Rice Paddy"
                className="bg-[#121212] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#00a86b] transition-colors"
                required
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-xs font-bold text-gray-500 uppercase mb-2">
                Message/Inquiry
              </label>
              <textarea
                rows="5"
                placeholder="Describe your issue in detail..."
                className="bg-[#121212] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#00a86b] transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Optional Attachment (Requirement 5.b.ii) */}
            <div className="flex flex-col mb-8">
              <label className="text-xs font-bold text-gray-500 uppercase mb-2">
                Share Images/Documents (Optional)
              </label>
              <input
                type="file"
                className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00a86b] file:text-white hover:file:bg-[#008a58] cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00a86b] hover:bg-[#008a58] text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-[#00a86b]/20"
            >
              Send Message to Advisor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
