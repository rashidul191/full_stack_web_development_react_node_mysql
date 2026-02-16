import React from "react";

const SubmitBtn = ({ value = "Submit", className = "" }) => {
  return (
    <div className="mb-1">
      {/* Input Submit */}
      <input
        className={`w-full bg-gray-800 text-white py-2 rounded font-semibold ${className}`}
        type="submit"
        value={value}
      />
    </div>
  );
};

export default SubmitBtn;
