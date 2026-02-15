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
    <div className="mb-4">
      {/* Label */}
      <label htmlFor={name} className="label">
        <span className="label-text">
          {finalLabel}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>

      {/* Input */}
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={`input input-bordered w-full ${className}`}
        {...register(name, {
          required: required ? `${finalLabel} is Required` : false,
        })}
      />

      {/* Error Message */}
      {errors?.[name] && (
        <label className="label">
          <span className="label-text-alt text-red-500">
            {errors[name]?.message}
          </span>
        </label>
      )}
    </div>
  );
};

export default LabeledInput;
