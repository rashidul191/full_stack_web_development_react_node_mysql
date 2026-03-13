import React from "react";
import { useApiHook } from "../../../../hook/customHook";
import { imageUrl } from "../../../../utility/imageUrl";
import { CommonStatus } from "../../../../enum/commonStatus";
import Loading from "../../../layouts/Shared/Loading";

const TeamSection = () => {
  const { data: teams, loading } = useApiHook("/team");

  const activeTeams = teams?.data?.filter(
    (team) => team.status === CommonStatus.Active,
  );

  if (loading) return <Loading></Loading>;
  return (
    <>
      <div className="team-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70">
                <span className="section-label">Our Professional members </span>
                <h2>Our Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {activeTeams
              ?.sort((a, b) => a.serial - b.serial)
              ?.map((team) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  key={team?.id}
                >
                  <div
                    className="single-team mb-30"
                    // data-aos="fade-up"
                    // data-aos-delay="100"
                  >
                    <div className="team-img">
                      <img
                        src={imageUrl(team?.image)}
                        alt={team?.name}
                        width="360"
                        height="451"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="team-caption">
                      <h3>
                        <a href="javascript:void(0)">{team?.name}</a>
                      </h3>
                      <span className="team-role">{team?.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
