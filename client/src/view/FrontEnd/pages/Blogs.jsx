import { React, useEffect, useState } from "react";

import axios from "axios";
import { URL } from "../../../config/app";
import { useForm } from "react-hook-form";

import LabeledInput from "../../Components/LabeledInput";
import LabeledTextarea from "../../Components/LabeledTextarea";
import SubmitBtn from "../../Components/SubmitBtn";
import { useNavigate } from "react-router-dom";

const Blog = () => {
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
    axios.post(`${URL}/blogs`, storeData).then((res) => {
      if (res.data.statusCode === 200) {
        window.location.reload();
      } else {
        alert(res.data.message);
      }
    });
  };


  const [blogs, setBlogs] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/blogs`).then((res) => {
      // console.log(res.data.data);
      setBlogs(res.data.data);
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
            name={"title"}
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
      <div className="text-center">
        {blogs.map((item) => (
          <div key={item.id}>
            <span>{item.id}</span>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded"
              onClick={() => navigate(`/blog/${item.id}`)}
            >
              Details
            </button>
            
            {/* <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={}
            >
              Delete
            </button> */}

          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
