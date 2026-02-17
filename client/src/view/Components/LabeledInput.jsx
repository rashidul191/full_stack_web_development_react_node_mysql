import React, { useState } from "react";
import { Mail, Key, Eye, EyeOff } from "lucide-react";

const LabeledInput = (props) => {
  const {
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    register,
    errors,
    className = "",
  } = props;
  // Auto format label from name
  const nameText = name
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

  const finalLabel = label ?? nameText;

  const [showPassword, setShowPassword] = useState(false);

  const finalType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <>
      <div className="mb-2">
        {/* Label */}
        <label htmlFor={name} className="label">
          <span className="label-text text-gray-800 font-semibold">
            {finalLabel}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>

        <div className="relative">
          {/* Left Icon */}
          {type === "email" && (
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-600 " />
          )}

          {type === "password" && (
            <Key className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
          )}

          {/* Input */}
          <input
            type={finalType}
            id={name}
            placeholder={placeholder}
            className={`w-full border-2 border-gray-600 rounded-md py-1.5 ${type === "password" ? "px-10" : type === "email" ? "pl-10" : "px-1.5"} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${className}`}
            {...register(name, {
              required: required ? `${label} is Required` : false,
            })}
          />

          {/* Eye Toggle */}
          {type === "password" && (
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {errors?.[name] && (
          <label className="label w-full">
            <span className="label-text-alt text-red-500">
              {errors[name]?.message}
            </span>
          </label>
        )}
      </div>{" "}
    </>
  );
};

export default LabeledInput;
