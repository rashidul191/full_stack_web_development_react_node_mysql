import React from "react";

const LabeledInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  register,
  errors,
  className = "",
}) => {
  // Auto format label from name
  const nameText = name
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

  const finalLabel = label ?? nameText;

  return (
    <div className="mb-2">
      {/* Label */}
      <label htmlFor={name} className="label">
        <span className="label-text text-gray-800 font-semibold">
          {finalLabel}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>

      {/* Input */}
      <input
        type={type}
        className={`border-2 border-gray-500 p-1.5 rounded w-full ${className}`}
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: required ? `${finalLabel} is Required` : false,
        })}
      />

      {/* Error Message */}
      {errors?.[name] && (
        <label className="label w-full">
          <span className="label-text-alt text-red-500">
            {errors[name]?.message}
          </span>
        </label>
      )}
    </div>
  );
};

export default LabeledInput;
