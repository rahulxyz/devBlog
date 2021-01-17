import React from "react";
import patternLeft from "../../../../assets/pattern-left.svg";
import patternRight from "../../../../assets/pattern-right.svg";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={patternLeft} alt="landing-img" />
      <div className="description">
        <h1>Dev Mentor</h1>
        {/* <p>Improve your developer skills by building real projects</p> */}
        <div class="footer">
          <button>Twit</button>
          <button>Face</button>
        </div>
      </div>
      <img src={patternRight} alt="landing-img" />
    </div>
  );
};

export default Banner;
