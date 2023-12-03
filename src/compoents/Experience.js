import React from "react";

const Experience = () => {
  return (
    <div className="expericence-wrapper p-4 font-mono font-[600] experience relative">
   
        <article className="company-name ">
        <h2 className='text-[24px] leading-10 text-[#169c65]'>Experience</h2>
          <div className="my-underline w-fit">Niveus Solutions</div>
          <div className="time-location">
            <span className="full-time">Full-time 1 yr 5 mos</span>
            <div className="location">Mangaluru, Karnataka, India</div>
          </div>
        </article>
     

      <article className="time-location">
        <div className="ca">Cloud Associate</div>
        <div >
            <span className="full-time">Mar 2023 - Present <span className="dot relative ml-2"></span> 10 mos</span>
            <div className="location">Skills: React, JavaScript, Css, Git, Leadership </div>
          </div>
      </article>
      <article className="time-location">
        <div className="cx">Cloud Explorer</div>
        <div >
            <span className="full-time">Sep 2022 - Mar 2023 <span className="dot relative ml-2"></span> 7 mos</span>
            <div className="location">Skills: React, JavaScript, Css, Git</div>
          </div>
      </article>
    </div>
  );
};

export default Experience;
