import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import LabeledInput from "../Components/LabeledInput";
import SubmitBtn from "../Components/SubmitBtn";
import { Link } from "react-router-dom";
import ApplicationLogo from "../Components/ApplicationLogo";
import { URL } from "../../config/app";

const RegistrationUser = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {

    const storeData = {
      username: data.username,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    axios.post(`${URL}/register`, storeData).then((res) => {
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
          <ApplicationLogo className={"h-32"} />

          {/* Card */}
          <div className="bg-white shadow-lg rounded-lg px-6 py-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">
              Sign Up
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <LabeledInput
                name="username"
                required={true}
                register={register}
                errors={errors}
              />
              <LabeledInput
                name="name"
                required={true}
                register={register}
                errors={errors}
              />
              <LabeledInput
                name="phone"
                required={true}
                register={register}
                errors={errors}
              />
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
                 watch={watch}
              />
              <LabeledInput
                type="password"
                name="confirm_password"
                required={true}
                register={register}
                errors={errors}
                 watch={watch}
              />

              {/* Forgot + Button */}
              <div className="flex items-center justify-center text-sm">
                <SubmitBtn className="" value="Sign Up" />
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationUser;
