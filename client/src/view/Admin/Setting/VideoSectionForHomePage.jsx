import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api/axios";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { imageUrl } from "../../../utility/imageUrl";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import HeaderSection from "../../Components/HeaderSection";
import { useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useBusinessSettings } from "../../../utility/businessSetting";
import LabeledTextarea from "../../Components/LabeledTextarea";

export default function VideoSectionForHomePage() {
  const { previewImage, handleImageChange } = useImagePreview(); // image preview custom hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset, // react-hook-form reset
  } = useForm();
  const { businessSetting, loading } = useBusinessSettings();

  useEffect(() => {
    if (businessSetting) {
      reset(businessSetting);
    }
  }, [businessSetting, reset]);

  const onSubmit = async (data) => {
    const formData = createFormDataWithFile(data); // helper function with image manage
    try {
      const res = await api.post(`/admin/business-setting`, formData);
      if (res?.data?.status === "success") {
        // setbusiness(res?.data?.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"Video Section Content"}></HeaderSection>
      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={
                  previewImage.video_thumbnal ||
                  imageUrl(businessSetting?.video_thumbnal)
                }
                alt=""
              />
              <LabeledInput
                type="file"
                name="video_thumbnal"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="video_youtube_link"
              value={businessSetting?.video_youtube_link}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full p-1"
              label="Title"
              name="video_title"
              value={businessSetting?.video_title}
              register={register}
              errors={errors}
            />

            <LabeledTextarea
              className="w-full p-1"
              label={"Content"}
              name="video_content"
              value={businessSetting?.video_content}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 1"
              name="video_point_1"
              value={businessSetting?.video_point_1}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 2"
              name="video_point_2"
              value={businessSetting?.video_point_2}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 3"
              name="video_point_3"
              value={businessSetting?.video_point_3}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 4"
              name="video_point_4"
              value={businessSetting?.video_point_4}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 5"
              name="video_point_5"
              value={businessSetting?.video_point_5}
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
