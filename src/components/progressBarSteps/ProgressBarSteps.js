import React from "react";
// import { ProgressBar } from "react-bootstrap";
import "./progressBarSteps.css";
// import MultiProgress from "react-multi-progress";
import styles from "./progressBarSteps.module.css";
import { Line } from "rc-progress";
const ProgressBarSteps = (props) => {
  return (
    <div className={styles.progressBarStepSect}>
      <Line
        percent={props.brevityScore}
        strokeWidth="7"
        trailWidth="7"
        trailColor="rgba(254, 86, 87,30%)"
        strokeColor="rgb(254, 86, 87)"
        strokeLinecap="square"
        className={styles.progressBar}
      />
      {/* <div>
        <MultiProgress
          transitionTime={1.2}
          elements={[
            {
              value: 20,
              color: "rgba(254, 86, 87,30%)",
              backgroundColor: "#fff",
              round: false,
            },
            {
              value: 20,
              color: "rgba(251, 136, 1,30%)",
            },
            {
              value: 20,
              color: "rgba(140, 223, 190,30%)",
            },
            {
              value: 20,
              color: "rgba(239, 90, 154,30%)",
            },
            {
              value: 20,
              color: "rgba(218, 218, 218,30%)",
            },
          ]}
          height={25}
          backgroundColor="transparent"
          border={"none"}
          borderRadius={"none"}
          round={false}
        />
      </div>
      <div className={styles.progressBarStepSubSect}>
        <MultiProgress
          transitionTime={1.2}
          elements={[
            {
              value: 10,
              color: "rgb(254, 86, 87)",
            },
            {
              value: 20,
              color: "rgb(251, 136, 1)",
            },
            {
              value: 20,
              color: "rgb(140, 223, 190)",
            },
            {
              value: 20,
              color: "rgb(239, 90, 154)",
            },
            {
              value: 20,
              color: "rgb(218, 218, 218)",
            },
          ]}
          height={25}
          backgroundColor="transparent"
          border={"none"}
          borderRadius={"none"}
          round={false}
        />
      </div> */}
    </div>
  );
};

export default ProgressBarSteps;
