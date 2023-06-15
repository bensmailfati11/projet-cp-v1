import React from "react";
import  './About.css';


const About = () => {
  return (
    <div className="About" id="About" style={{height:"800px",padding:"20%"}}>
      <section className="with-pattern-1 py-5" id="services">
  <div className="container py-5">
    <div className="row align-items-center mb-5 gy-5">
      <div className="col-lg-6">
        <img className="img-fluid w-100 px-lg-5" id="img" alt="" />
      </div>
      <div className="col-lg-6">
        <h2>The Best Business Solutions Guide for You</h2>
        <p className="text-muted">
          Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
          labore dolore magna aliqua enim ad minim veniam quis nostrud
          exercitation.
        </p>
        <button
          className="btn btn-primary js-modal-btn"
          data-video-id="B6uuIHpFkuo"
        >
          <i className="fas fa-play-circle me-2" />
          Play video
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
