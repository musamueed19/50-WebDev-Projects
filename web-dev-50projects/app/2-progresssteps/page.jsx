import React from 'react'

import styles from "./style.module.css"


const ProgressStepsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        {/* progress line */}
        <div className={styles.progress}></div>

        {/* progress steps - circles */}
        <div className={`${styles.circle} ${styles.active}`}>1</div>
        <div className={`${styles.circle} ${styles.active}`}>2</div>
        <div className={styles.circle}>3</div>
        <div className={styles.circle}>4</div>
      </div>

      {/* buttons */}
      <button className={styles.btn} id="prev" disabled>
        Prev
      </button>
      <button className={styles.btn} id="next">
        Next
      </button>
    </div>
  );
}

export default ProgressStepsPage