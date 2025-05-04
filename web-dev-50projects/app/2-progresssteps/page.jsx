"use client";

import React, { useEffect, useState } from "react";

import styles from "./style.module.css";

const ProgressStepsPage = () => {
  const [stepIndex, setStepIndex] = useState(1);
  const totalSteps = 4;

  // Calculate the width of the progress line
  const progressWidth = ((stepIndex - 1) / (totalSteps - 1)) * 100;

  useEffect(() => {
    console.log(stepIndex);
  }, [stepIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        {/* progress line */}
        <div className={styles.progress} style={{
          width: `${progressWidth}%`
        }}></div>

        {/* progress steps - circles */}
        {/* <div className={`${styles.circle} ${styles.active}`}>1</div>
        <div className={`${styles.circle} ${styles.active}`}>2</div>
        <div className={styles.circle}>3</div>
        <div className={styles.circle}>4</div> */}

        {/* dynamically render progress steps - circles */}
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index + 1}
            className={`${styles.circle} ${
              index + 1 < stepIndex && styles.completed
              } ${
              stepIndex === index + 1 && styles.active
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* buttons */}
      <button
        className={styles.btn}
        id="prev"
        disabled={stepIndex === 1}
        onClick={() => setStepIndex((prev) => Math.max(1, --prev))}
      >
        Prev
      </button>
      <button
        className={styles.btn}
        id="next"
        disabled={stepIndex === 5}
        onClick={() => setStepIndex((prev) => Math.min(totalSteps + 1, ++prev))}
      >
        {stepIndex >= 4 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default ProgressStepsPage;
