import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api/axios";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { getBusinessSettings } from "../../../utility/business-setting";

export default function GeneralSetting() {
  const [businessSetting, setBusinessSetting] = useState({});
  console.log(businessSetting);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset, // react-hook-form reset
  } = useForm();

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getBusinessSettings();
      setBusinessSetting(settings);
      reset(settings); // form field এ value সেট করা
    };

    fetchSettings();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await api.post(`/admin/business-setting`, data).then((res) => {
        // console.log(res?.data?.status === "success");
        if (res?.data?.status === "success") {
          setBusinessSetting(res?.data?.data);
          toast.success(res.data.message);
        }
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <h3 className="text-lg font-semibold">General Setting</h3>
      <div className="shadow-md p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap">
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="company_name"
              value={businessSetting?.company_name}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="phone"
              value={businessSetting?.phone}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="whatsapp"
              value={businessSetting?.whatsapp}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              type="email"
              name="email"
              value={businessSetting?.email}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="address"
              value={businessSetting?.address}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="copyright_text"
              value={businessSetting?.copyright_text}
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value="Sign Up" />
          </div>
        </form>
      </div>
    </>
  );
}
