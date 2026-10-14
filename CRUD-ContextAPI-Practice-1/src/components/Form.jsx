import React from "react";

const Form = () => {
  return (
    <div className="w-96 rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        User Details
      </h2>

      {/* Image URL */}
      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Image URL
        </label>

        <input
          type="text"
          placeholder="Enter image URL"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Submit */}
      <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Submit
      </button>
    </div>
  );
};

export default Form;
