import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../config/app";
const BlogDetails = () => {
  let { id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/blogs/${id}`).then((res) => {
      // console.log(res.data);
      setBlog(res.data.data);
    });
  }, []);

  return (
    <>
      <div>
        <h4>{blog?.id}</h4>
        <h3>{blog?.title}</h3>
        <p>{blog?.content}</p>
      </div>
    </>
  );
};

export default BlogDetails;
