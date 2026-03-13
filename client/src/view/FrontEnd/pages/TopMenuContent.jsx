import React from "react";
import { useParams } from "react-router-dom";

const TopMenuContent = () => {
  const { slug } = useParams();
  return (
    <>
      <div className="services-area section-padding3">
        <div className="container">
          {/* <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70">
                <span className="section-label">Our Portfolios of cases</span>
                <h2>Featured Case Study</h2>
              </div>
            </div>
          </div> */}
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-10">
              <div
                className="single-services mb-100"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="services-img">
                  <img
                    src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.webp"
                    alt="Strategy planning case study"
                    width="555"
                    height="394"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="services-caption">
                  <span className="case-category">Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenuContent;
