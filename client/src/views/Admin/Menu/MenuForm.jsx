import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import LabeledTextarea from "../../Components/LabeledTextarea";
import { useApiHook, useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../../../utility/imageUrl";
import LabeledSelected from "../../Components/LabeledSelected";
import { CommonStatus } from "../../../enum/commonStatus";

export default function MenuForm() {
  const { previewImage, handleImageChange } = useImagePreview();

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/menu"); // custom hook

  // Single data (edit)
  const { data: menu, loading } = useApiHook(id ? `/admin/menu/${id}` : null); // custom hook

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // ==========================
  // Load single data in form
  // ==========================
  useEffect(() => {
    if (menu) {
      reset(menu);
    }
  }, [menu, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    let res;
    if (id) {
      res = await updateData(id, data, true); // true for image
    } else {
      res = await createData(data, true); // true for image
    }

    if (res) {
      navigator("/admin/menu");
    }
  };

  // ==========================
  // Loading
  // ==========================
  if (id && loading) {
    return <Loading />;
  }
  return (
    <>
      <HeaderSection
        title={`Menu ${id ? "Edit" : "Create"}`}
        backLink={"/admin/menu"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap">
            <div className="w-full p-1">
              <img
                className="w-14 h-14 mb-2 object-cover rounded"
                src={previewImage?.image || imageUrl(menu?.image)}
                alt=""
              />

              <LabeledInput
                type="file"
                name="banner_image"
                onChange={handleImageChange}
                // required={!id}
                register={register}
                errors={errors}
              />
            </div>

            <LabeledInput
              name="name"
              required={true}
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />
            <LabeledInput
              type="number"
              name="serial"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />

            <LabeledSelected
              name="status"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            >
              <option value="">Select Status</option>

              {Object.entries(CommonStatus).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </LabeledSelected>
          </div>

          {/* Forgot + Button */}
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value={`${id ? "Update" : "Publish"}`} />
          </div>
        </form>
      </div>
    </>
  );
}
