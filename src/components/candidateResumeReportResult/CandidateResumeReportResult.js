import React from "react";
import { ProgressBar } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CandidateResumeReportResult.module.css";
import "./accordians.css";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import ProgressBarSteps from "../progressBarSteps/ProgressBarSteps";

const CandidateResumeReportResult = () => {
  const resumeData = useSelector(
    (data) => data.getCandidateResultsReducer.candidateResults
  );

  const percentage = Math.round(resumeData?.data?.overall_score * 10) / 10;
  const brevityScore = resumeData?.data?.brevity?.brevity_score;
  const impactScore = resumeData?.data?.impact?.impact_score;
  const skillsScore = resumeData?.data?.skills?.skill_score;
  const personalInfoScore =
    resumeData?.data?.personal_info?.personal_information_score;
  const experinceScore = resumeData?.data?.experience?.experience_score;
  console.log("Data", brevityScore);
  return (
    <div className={styles.candidateReport}>
      <div className="container">
        <div className="row">
          <div className={`${styles.overallScore} col-lg-6 col-md-12`}>
            <h2 className={styles.overallScoreHeading}>Overall Score</h2>
            <p className={styles.overallScorePara}>
              Add more missing skills (indicated by ) into your resume to
              increase your match rate to 80% or above.
            </p>

            <div className={styles.circularBar}>
              <CircularProgressbar
                className={styles.circularProgressbarInner}
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textAlign: "center",
                  textColor: "#000000",
                  textSize: "15px",
                  pathColor: "#35CFBB",
                  trailColor: "#F5F5F5",
                })}
              />
            </div>
          </div>
          <div className={`${styles.overView} col-lg-6 col-md-12`}>
            <h2 className={styles.overViewHeading}>Overview</h2>
            <div className={styles.lineBar}>
              <a href="#brevity" className={styles.overViewSubHeading}>
                Brevity
              </a>
              <ProgressBar
                now={brevityScore}
                label={`${brevityScore}% `}
                className={styles.brevityProgress}
              />
              <a href="#impact" className={styles.overViewSubHeading}>
                Impact
              </a>
              <ProgressBar
                now={impactScore}
                label={`${impactScore}% `}
                className={styles.brevityProgress}
              />
              <a href="#skills" className={styles.overViewSubHeading}>
                Skills
              </a>
              <ProgressBar
                now={skillsScore}
                label={`${skillsScore}% `}
                className={styles.brevityProgress}
              />
              <a href="#personalInfo" className={styles.overViewSubHeading}>
                Personal Information
              </a>
              <ProgressBar
                now={personalInfoScore}
                label={`${personalInfoScore}% `}
                className={styles.brevityProgress}
              />
              <a href="#experience" className={styles.overViewSubHeading}>
                Experience
              </a>
              <ProgressBar
                now={experinceScore}
                label={`${experinceScore}% `}
                variant="custom"
                className={styles.brevityProgress}
              />
              <style type="text/css">
                {`
                  .progress-custom {
                    background-color: purple;
                    color: white;
                  }
                `}{" "}
              </style>
            </div>
          </div>
          <div
            className={` col-lg-6 col-md-12 col-sm-12 ${styles.brevitySection}`}
            id="brevity"
          >
            <div>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h2>Brevity</h2>
                    <div className="d-flex flex-column w-75 ms-auto">
                      <div className="ms-auto">
                        <p
                          className={styles.brevitySubScore}
                        >{`${brevityScore}/100`}</p>
                      </div>
                      <div className="col-6 ms-auto b-5">
                        <ProgressBarSteps brevityScore={brevityScore} />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.brevityDescription}>
                      <h3 className={styles.brevitySubHeading}>File Name</h3>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateResumeReportResult;
