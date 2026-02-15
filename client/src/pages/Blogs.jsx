import { React, useEffect, useState } from "react";
import axios from "axios";

import { url } from "../config/app";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  console.log(blogs);

  useEffect(() => {
    axios.get(`${url}/blogs`).then((res) => {
      // console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  return (
    <>
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
