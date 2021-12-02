import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 ">
            <h2 className={styles.heroContentHeading}>
              We deliver <span>Superb Creative</span> Output to make great
              things happen.
            </h2>
            <p className={styles.heroContentPara}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <Link
              to="/resume-section"
              className="global-btn"
              style={({ fontSize: "16px" }, { marginTop: "15px" })}
            >
              Upload Resume
            </Link>
          </div>
          <div className="col-12 col-lg-5 ">
            <img
              className={styles.heroImg}
              src="/assets/images/meeting-deadlines-colored.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
