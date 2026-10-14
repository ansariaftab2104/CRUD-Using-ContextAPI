import React from "react";

const UserCard = () => {
  return (
    <div className="w-80 rounded-xl bg-white p-5 shadow-lg">
      {/* User Image */}
      <div className="flex justify-center">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>

      {/* User Details */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Mohammed Aftab
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          aftab@example.com
        </p>

        <p className="mt-1 text-sm text-gray-600">
          +91 98765 43210
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Edit
        </button>

        <button className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;