import { React, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config/app";
import { useForm } from "react-hook-form";
import LabeledInput from "../Components/LabeledInput";
const Blog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/blogs`).then((res) => {
      // console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     image: "image here...",
  //     title: e.target.title.value,
  //     content: e.target.content.value,
  //   };
  //   axios.post(`${URL}/blogs`, data).then((res) => {
  //     console.log(res.data);
  //   });
  // };

  return (
    <>
      {/* Create Blog Form */}
      <div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <textarea type="text" name="content" placeholder="Content" />
          <button type="submit">Create</button>
        </form> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput
            className="input input-bordered w-full max-w-lg"
            name="first_name"
            required={true}
            register={register}
            errors={errors}            
          />

          <div>
            <label className="label">
              <span className="label-text">Tool Image</span>
            </label>
            <input
              {...register("image", {
                required: { value: true, message: "Tool Image is Required" },
              })}
              type="file"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              {...register("avaQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.avaQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.avaQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Minimum Orders</span>
            </label>
            <input
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum Orders is Required",
                },
              })}
              type="number"
              placeholder="Minimum Orders"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.minOrder?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minOrder.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Price Per Unit</span>
            </label>
            <input
              {...register("pricePerUnit", {
                required: {
                  value: true,
                  message: "Price Per Unit is Required",
                },
              })}
              type="number"
              placeholder="Price Per Unit"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              {errors.pricePerUnit?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.pricePerUnit.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
              className="textarea input-bordered w-full max-w-lg my-3"
              placeholder="Description"
              rows={5}
              name="description"
            ></textarea>
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input className="btn w-full" type="submit" value="Add Tool" />
          </div>
        </form>
      </div>
      {/* Blog Show List */}
      <div>
        {blogs?.map((item, index) => (
          <div key={item.id}>
            <span>{index}</span>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
