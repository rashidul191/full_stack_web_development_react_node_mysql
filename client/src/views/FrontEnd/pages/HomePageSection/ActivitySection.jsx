import React from "react";
import { useApiHook } from "../../../../hook/customHook";

export default function ActivitySection() {
  const { data: activities } = useApiHook("/activity");
  return (
    <>
      <div className="count-down-area pb-120">
        <div className="container">
          <div className="row justify-content-between">
            {activities?.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter active text-center">
                  <span className="counter">{item?.number}</span>
                  <p>{item?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
