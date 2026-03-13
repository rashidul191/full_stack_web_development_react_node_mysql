import React from "react";
import { imageUrl } from "../../../../utility/imageUrl";
import { Link } from "react-router-dom";

export default function Blog({ blog }) {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div
          className="home-blog-single mb-30"
          //   data-aos="fade-up"
          //   data-aos-delay="100"
        >
          <div className="blog-img-cap">
            <div className="blog-img">
              <img
                src={imageUrl(blog?.image)}
                alt="Blog post image"
                width="555"
                height="420"
                loading="lazy"
                decoding="async"
              />
              <ul>
                <li>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </li>
              </ul>
            </div>
            <div className="blog-cap">
              <h3>
                <Link to={`/blog/${blog?.slug}`}>{blog?.title}</Link>
              </h3>
              <p>{blog?.short_description}</p>
              <Link to={`/blog/${blog?.slug}`} className="more-btn">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
