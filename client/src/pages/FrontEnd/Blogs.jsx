import { React, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config/app";
import { useForm } from "react-hook-form";
import LabeledInput from "../Components/LabeledInput";
import LabeledTextarea from "../Components/LabeledTextarea";
import SubmitBtn from "../Components/SubmitBtn";
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

        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <LabeledInput
            className=""
            name="first_name"
            required={true}
            register={register}
            errors={errors}
          />

          <LabeledTextarea
            className=""
            name={"content"}
            placeholder={"Content here..."}
            register={register}
            errors={errors}
          />

          <SubmitBtn className="" value={"Add Tool"} />

          
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
