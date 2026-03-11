import React from "react";
import "./Jobs.css";

const Jobs = () => {
  return (
    <div className="jobs-container">

      <h1>Available Jobs</h1>

      <div className="job-card">
        <h3>React Developer</h3>
        <p>Company: Tech Solutions</p>
        <p>Location: Surat</p>
        <button>Apply Now</button>
      </div>

      <div className="job-card">
        <h3>Frontend Developer</h3>
        <p>Company: WebSoft</p>
        <p>Location: Ahmedabad</p>
        <button>Apply Now</button>
      </div>

      <div className="job-card">
        <h3>UI Designer</h3>
        <p>Company: Creative Studio</p>
        <p>Location: Mumbai</p>
        <button>Apply Now</button>
      </div>

    </div>
  );
};

export default Jobs;