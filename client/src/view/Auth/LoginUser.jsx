import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import LabeledInput from "../Components/LabeledInput";
import SubmitBtn from "../Components/SubmitBtn";
import { Link } from "react-router-dom";
import ApplicationLogo from "../Components/ApplicationLogo";

const LoginUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const storeData = {
      image: "image here...",
      title: data.title,
      content: data.content,
    };
    axios.post(`${URL}/login`, storeData).then((res) => {
      if (res.data.statusCode === 200) {
        navigator("/");
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <ApplicationLogo />

          {/* Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Login
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <LabeledInput
                type="email"
                name="email"
                required={true}
                register={register}
                errors={errors}
              />

              <LabeledInput
                type="password"
                name="password"
                required={true}
                register={register}
                errors={errors}
              />

              {/* Forgot + Button */}
              <div className="flex items-center justify-between text-sm">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition underline"
                >
                  Forgot your password?
                </Link>

                <SubmitBtn className="" value="Login" />
              </div>
            </form>

            {/* Register */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
