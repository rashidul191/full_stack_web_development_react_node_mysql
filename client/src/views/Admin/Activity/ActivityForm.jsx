import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useNavigate, useParams } from "react-router-dom";

export default function ActivityForm() {
  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/activity"); // custom hook

  // Single data (edit)
  const { data: activity, loading } = useApiHook(
    id ? `/admin/activity/${id}` : null,
  ); // custom hook

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
    if (activity) {
      reset(activity);
    }
  }, [activity, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    let res;
    if (id) {
      res = await updateData(id, data);
    } else {
      res = await createData(data);
    }

    if (res) {
      navigator("/admin/activity");
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
        title={`Activity ${id ? "Edit" : "Create"}`}
        backLink={"/admin/activity"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap items-end">
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="title"
              required={true}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="number"
              type="number"
              required={true}
              register={register}
              errors={errors}
            />
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
